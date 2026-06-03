let column;
let row;
const color = ['red', 'green', 'blue', 'purple', 'yellow', 'orange']

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

const container = document.querySelector('.container');
const gridLayout = document.querySelector('.grid-layout');
createDiv(16);


const rowSelector = document.querySelectorAll('.row').forEach(row => {
  row.addEventListener('mouseover', () => {
    row.style.backgroundColor = 'purple'
  })
});

const gridButton = document.querySelector('#grid-btn');
const getInput = () => {
  const gridSize = parseInt(prompt('Choose a grid size', 16));
  if (gridSize === 100) {
    getInput();
  } else return gridSize;
}

gridButton.addEventListener('click', () => {
  const selectedGrid = getInput();
  gridLayout.textContent = ''
  createDiv(selectedGrid);
})