function run() {
    const divOfFilms = document.querySelector('.film');
    const elemOfDiv = divOfFilms.getElementsByTagName('div');
    const on_screen = 4;
    const all_films = 10;
    let condition = 0;


    function offset(conditionValue, buttonDirection, filmLength){
      if (condition == 6 && buttonDirection == "right") {
        condition = condition - filmLength;
      } else if (condition == -4 && buttonDirection == "left") {
        condition = condition + filmLength;
      }
      return condition;
    }


    function right() {
      condition = offset(condition, "right", elemOfDiv.length);
      if (condition >= 0) {
        elemOfDiv[condition].classList.remove('film1');
        elemOfDiv[condition].classList.add('hidden_block');
      } else {
        elemOfDiv[condition + all_films].classList.remove('film1');
        elemOfDiv[condition + all_films].classList.add('hidden_block');
      }
      for (let i = 1; i <= on_screen; i++) {
        if (i + condition >= 0) {
          elemOfDiv[i+condition].classList.remove('film'+(i+1));
          elemOfDiv[i+condition].classList.add('film'+i);
          elemOfDiv[i+condition].classList.remove('hidden_block');
        } else {
          elemOfDiv[all_films+i+condition].classList.remove('film'+(i+1));
          elemOfDiv[all_films+i+condition].classList.add('film'+i);
          elemOfDiv[all_films+i+condition].classList.remove('hidden_block');
        }
      }
      condition++;
      console.log(condition)
    };
    console.log(elemOfDiv.length - condition);

    function left() {
      condition = offset(condition, "left", elemOfDiv.length);
      elemOfDiv[condition + on_screen - 1].classList.remove('film4');
      elemOfDiv[condition + on_screen - 1].classList.add('hidden_block');
      for (let i = 3; i >= 0; i--) {
        if (i + condition > 0) {
          elemOfDiv[i + condition - 1].classList.remove('film' + i);
          elemOfDiv[i + condition - 1].classList.add('film' + (i + 1));
          elemOfDiv[i + condition - 1].classList.remove('hidden_block');
        } else {
          elemOfDiv[i + all_films + condition - 1].classList.remove('film' + i);
          elemOfDiv[i + all_films + condition - 1].classList.add('film' + (i + 1));
          elemOfDiv[i + all_films + condition - 1].classList.remove('hidden_block');
        }
      }
      condition--;
      console.log(condition)
    }

    const rightArrow = document.getElementById('right_event');
    rightArrow.addEventListener('click', right);

    const leftArrow = document.getElementById('left_event');
    leftArrow.addEventListener('click', left);
}


window.onload = run;
