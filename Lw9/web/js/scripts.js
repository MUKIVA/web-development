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
    };

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
    }



    async function ajax(formData) {
      const errorColor = "#EE5252";
        const url = "/web/php/formData.php";
        let userData = {};
        await fetch( url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => userData = data);
                checkInfo(userData);
                
    }

    function checkInfo(userData) {
        const errorColor = "#EE5252";
        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const message = document.querySelector('textarea[name="message"]');

        console.log(userData);
        if (userData['email'] === 'error' || userData['message'] === 'error' || userData['name'] === 'error') {
            name.style.borderColor = userData['name'] === 'error' ? errorColor : null;
            email.style.borderColor = userData['email'] === 'error' ? errorColor : null;
            message.style.borderColor = userData['message'] === 'error' ? errorColor : null;
            successMessage.style.visibility = "hidden"
        }
        else {
            name.style.borderColor =  null;
            email.style.borderColor =  null;
            message.style.borderColor =  null;
            successMessage.style.visibility = null;

        }
    }

    const rightArrow = document.getElementById('right_event');
    rightArrow.addEventListener('click', right);

    const leftArrow = document.getElementById('left_event');
    leftArrow.addEventListener('click', left);

    const successMessage = document.querySelector('.send_message');
    successMessage.style.visibility = "hidden"
    const form = document.getElementById('form');
    form.addEventListener('submit', function(){
        event.preventDefault();
        const formData = new FormData(this);
        ajax(formData);
    });
}


window.onload = run;
