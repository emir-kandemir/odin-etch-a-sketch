function createDiv(num) {
  for (i = 0; i < num ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('innerDivs');
    div.style.border = '1px solid black';
    div.style.width = '100px';
    div.style.height = '100px';
    container.appendChild(div);
  }
}

const container = document.querySelector('.container');
createDiv(4);
