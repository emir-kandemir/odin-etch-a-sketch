let column;
let row;

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