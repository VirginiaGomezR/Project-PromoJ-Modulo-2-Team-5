'use strict';

let isValid = false;

formData = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: fr.result,
};

const submitButton = document.querySelector('form .js-button-share');

const allInputs = document.querySelectorAll('.js-form input');

const textError = document.querySelector('.form__share__text--error');

allInputs.forEach((element) => {
  element.addEventListener('change', changeElement);
});

function changeElement(event) {
  getValuesFromForm();
  validateForm();

  if (isValid === true) {
    submitButton.removeAttribute('disabled');
    textError.classList.add('js-hidden');
  } else {
    submitButton.setAttribute('disabled', 1);
    textError.classList.remove('js-hidden');
  }
  console.log(formData);
}

function getValuesFromForm() {
  allInputs.forEach((input) => {
    formData[input.name] = input.value;
  });
}

function validateForm() {
  isValid = true;

  for (let item in formData) {
    if (formData[item] === '') {
      isValid = false;
    }
  }
  return isValid;
}
