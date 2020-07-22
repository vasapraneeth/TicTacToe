var btn = document.querySelector('button');
var square = document.querySelectorAll('td');

function clearBoard() {
  for(var i=0;i<9;i++){
    square[i].textContent = '';
  }
}

btn.addEventListener('click',clearBoard);

function game() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < 9; i++) {
  square[i].addEventListener('click',game);
}
