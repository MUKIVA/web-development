const div = document.querySelector('.film');
const elem = div.getElementsByTagName('div');
const on_screen = 4;
const all_films = 10;
var j = 0;
//let i = 0;

function right(event) {
  if (j >= 0) {
    elem[j].classList.remove('film1');
    elem[j].classList.add('hidden_block');
  } else {
    elem[j + all_films].classList.remove('film1');
    elem[j + all_films].classList.add('hidden_block');
  }
  for (let i = 1; i <= on_screen; i++) {
    if (i + j >= 0) {
      elem[i+j].classList.remove('film'+(i+1));
      elem[i+j].classList.add('film'+i);
      elem[i+j].classList.remove('hidden_block');
    } else {
      elem[all_films+i+j].classList.remove('film'+(i+1));
      elem[all_films+i+j].classList.add('film'+i);
      elem[all_films+i+j].classList.remove('hidden_block');
    }
  }
  if (j == 5) {
    j = -4;
  } else {
    j++;
  }
};

function left(event) {
  elem[j + on_screen - 1].classList.remove('film4');
  elem[j + on_screen - 1].classList.add('hidden_block');
  for (let i = 3; i >= 0; i--) {
    if (i + j > 0) {
      elem[i + j - 1].classList.remove('film' + i);
      elem[i + j - 1].classList.add('film' + (i + 1));
      elem[i + j - 1].classList.remove('hidden_block');
    } else {
      elem[i + all_films + j - 1].classList.remove('film' + i);
      elem[i + all_films + j - 1].classList.add('film' + (i + 1));
      elem[i + all_films + j - 1].classList.remove('hidden_block');
    }
  }
  if (j == -3) {
    j = 6;
  } else {
    j--;
  }
}


function run() {
    const rightArrow = document.getElementById('right_event');
    rightArrow.addEventListener('click', right);

    const leftArrow = document.getElementById('left_event');
    leftArrow.addEventListener('click', left);
}


window.onload = run;
