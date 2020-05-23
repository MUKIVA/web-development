function run() {

    async function ajax(formData) {
      const errorColor = "#EE5252";
        const url = "/web/php/formData.php";
        let userData = {};
        await fetch( url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => checkInfo(data));          
    }

    function checkInfo(userData) {
        if (userData['email'] === 'error' || userData['message'] === 'error' || userData['name'] === 'error') {
            userData['name'] === 'error' ? name.classList.add('error') : name.classList.remove('error');
            userData['email'] === 'error' ? email.classList.add('error') : email.classList.remove('error');
            userData['message'] === 'error' ? message.classList.add('error') : message.classList.remove('error');
            successMessage.style.visibility = "hidden"
        }
        else {
            name.classList.remove('error');
            email.classList.remove('error');
            message.classList.remove('error');
            successMessage.style.visibility = "visible"

        }
    }

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    name.addEventListener('click', function(){
        name.classList.remove('error');
    });

    email.addEventListener('click', function(){
        email.classList.remove('error');
    });

    message.addEventListener('click', function(){
        message.classList.remove('error');
    });

    const successMessage = document.querySelector('.send_message');
    successMessage.style.visibility = "hidden"
    const form = document.getElementById('form');
    form.addEventListener('submit', function(){
        event.preventDefault();
        const formData = new FormData(this);
        ajax(formData);
    });
}


window = addEventListener('load', run);
