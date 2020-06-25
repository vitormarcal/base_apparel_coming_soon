const form  = document.querySelector('.form');
const inputEmail = document.querySelector('.group .input');
const messageError = document.querySelector('.message-error');
const iconError = document.querySelector('.icon-error');


inputEmail.addEventListener("input", function (event) {
    iconError.classList.remove('icon-error--active')
    messageError.classList.remove('message-error--visible')
    if (!inputEmail.validity.valid) {
        iconError.classList.add('icon-error--active')
        messageError.classList.add('message-error--visible')
    }
  }, false);


  form.addEventListener("submit", function (event) {

    if (!inputEmail.validity.valid) {
      
        iconError.classList.add('icon-error--active')
        messageError.classList.add('message-error--visible')
        event.preventDefault();
    }
  }, false);