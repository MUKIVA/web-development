function run() {
    const divOfFilms = document.querySelector('.film');
    const elemOfDiv = divOfFilms.getElementsByTagName('div');
    const on_screen = 4;
    const all_films = elemOfDiv.length;
    const initialCondition = 0;
    let condition = initialCondition;


    function offset(conditionValue, buttonDirection){
      if ((conditionValue == all_films - on_screen) && buttonDirection == "right") {
        conditionValue = conditionValue - all_films;
      } else if ((conditionValue == -on_screen) && buttonDirection == "left") {
        conditionValue = conditionValue + all_films;
      }
      return conditionValue;
    }


    function right() {
      condition = offset(condition, "right");
      if (condition >= initialCondition) {
        elemOfDiv[condition].classList.remove('film1');
        elemOfDiv[condition].classList.add('hidden_block');
      } else {
        elemOfDiv[condition + all_films].classList.remove('film1');
        elemOfDiv[condition + all_films].classList.add('hidden_block');
      }
      for (let i = 1; i <= on_screen; i++) {
        if (i + condition >= initialCondition) {
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
    };

    function left() {
      condition = offset(condition, "left");
      elemOfDiv[condition + on_screen - 1].classList.remove('film4');
      elemOfDiv[condition + on_screen - 1].classList.add('hidden_block');
      for (let i = 3; i >= 0; i--) {
        if (i + condition > initialCondition) {
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
    }

    const rightArrow = document.getElementById('right_event');
    rightArrow.addEventListener('click', right);

    const leftArrow = document.getElementById('left_event');
    leftArrow.addEventListener('click', left);
}


window.onload = run;
