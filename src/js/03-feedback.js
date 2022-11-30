import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputTextEl = document.querySelector('textarea[name="message"]');

checkStorage();

const formInputData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitClick);

function onFormInput(evt) {
  formInputData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInputData));
}

function onSubmitClick(evt) {
  evt.preventDefault();

  if (evt.target.email.value !== '' && evt.target.message.value !== '') {
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formInputData);
  }
}

function checkStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);

  if (savedData) {
    inputEmailEl.value = parsedData.email;
    inputTextEl.value = parsedData.message;
  }
}
