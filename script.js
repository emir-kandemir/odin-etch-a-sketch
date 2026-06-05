let column;
let row;
const container = document.querySelector('.container');
const gridLayout = document.querySelector('.grid-layout');
const gridButton = document.querySelector('#grid-btn');
const rgbButton = document.querySelector('#rgb-btn');
const colorButton = document.querySelector('#color-btn');

const color = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
let isSelected = false;

function createDiv(num) {
  for (let i = 0; i < num; i++) {
    column = document.createElement('div');
    column.classList.add('column');
    gridLayout.appendChild(column);
    for (let j = 0; j < num; j++) {
      row = document.createElement('div');
      row.classList.add('row');
      column.appendChild(row);
    }
  }
}

function rowColor() {
  const rowSelector = document.querySelectorAll('.row').forEach((row) => {
    if (isSelected) {
      row.addEventListener('mouseover', () => {
        row.style.backgroundColor =
          color[Math.floor(Math.random() * color.length)];
      });
    } else {
      row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'purple';
      });
    }
  });
}

const getInput = () => {
  const gridSize = parseInt(prompt('Choose a grid size', 16));
  if (gridSize === 100) {
    getInput();
  } else return gridSize;
};

gridButton.addEventListener('click', () => {
  const selectedGrid = getInput();
  gridLayout.textContent = '';
  createDiv(selectedGrid);
  rowColor();
});

colorButton.addEventListener('click', () => {
  isSelected = false;
  rowColor();
});

rgbButton.addEventListener('click', () => {
  isSelected = true;
  rowColor();
});

createDiv(16);
