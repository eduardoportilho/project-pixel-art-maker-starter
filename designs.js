// Constants
const canvas = $('#pixelCanvas');
const sizePickerForm = $('#sizePicker');
const colorPicker = $('#colorPicker');

/**
 * Submit event handler. 
 * Create an empty grid with the size specified in the inputs.
 * @param {Event} event
 */
function onSubmit(event) {
  event.preventDefault();
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  makeGrid(height, width);
}

/**
 * Create an empty grid of the specified size.
 * @param {number} height Grid height.
 * @param {number} width Grid width.
 */
function makeGrid(height, width) {
  canvas.empty();
  for(let row = 0 ; row < height ; row++) {
    let rowElement = $('<tr>');
    for(let col = 0 ; col < width ; col++) {
      let cellElement = $('<td>');
      cellElement.on('click', onCellClick);
      rowElement.append(cellElement);
    }
    rowElement.appendTo(canvas);
  }
}

/**
 * Grid cell click handler.
 * Change the color of the cell to the color selected on the color picker.
 * @param {Event} event 
 */
function onCellClick(event) {
  const cell = $(event.target);
  const selectedColor = colorPicker.val();
  cell.css('background-color', selectedColor);
}

/**
 * Initialize the app.
 */
function init() {
  sizePickerForm.on('submit', onSubmit);
}

init();
