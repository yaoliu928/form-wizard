let currentForm = 0;
const forms = document.getElementsByClassName('form');
const form = document.querySelector('.form-wrapper');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const completedBar = document.querySelector('.bar--completed');
const result = document.querySelector('.result');
const inputValue = document.getElementsByTagName('input');
const stTypeValue = document.getElementById('street-type');
const resultItems = document.getElementsByClassName('result__item');
const stTypeResult = document.querySelector('.result__item--select');

initial();

/*******************************************
/     UI update
/******************************************/
function initial() {
  bindEvent();
  showForm(currentForm);
}

function showForm(num) {
  if (forms[num]) {
    forms[num].style.display = 'block';
  };
  showButton(num);
  showProgressBar();
}

function showButton(num) {
  if (!num && prevBtn) {
    prevBtn.style.display = 'none';
  } else {
    if (prevBtn) {
      prevBtn.style.display = 'inline';
    }
  }
  if (num === forms.length - 1) {
    nextBtn.innerHTML = 'Submit';
  } else {
    if (nextBtn) {
      nextBtn.innerHTML = 'Next';
    }
  }
}

function showProgressBar() {
  if (!currentForm && completedBar) {
    completedBar.style.width = '5%';
    completedBar.innerHTML = '';
  } else {
    if (completedBar) {
      const percent = Math.floor(currentForm * 100 / forms.length);
      completedBar.style.width = `${percent}%`;
      completedBar.innerHTML = `${percent}%`;
    }
  }
}

function showResult() {
  form.style.display = 'none';
  result.style.display = 'block';
  completedBar.style.width = '100%';
  completedBar.innerHTML = '100%';
}

/*******************************************
/     Form process
/******************************************/
function nextPrev(num) {
  if (num === 1 && !isFormValid()) {
    return false;
  }
  forms[currentForm].style.display = 'none';
  currentForm += num;
  if (currentForm === forms.length) {
    submitForm();
  }
  showForm(currentForm);
}

function submitForm() {
  for (let i = 0; i < inputValue.length; i++) {
    const info = inputValue[i].value;
    resultItems[i].innerHTML = info;
  }
  stTypeResult.innerHTML = stTypeValue.value;
  unBindEvent();
  showResult();
  return false;
}

function checkInputFormat(shownForm, valid) {
  const shownInputs = shownForm.getElementsByTagName('input');
  const shownNotice = shownForm.getElementsByClassName('notice');
  for (let i = 0; i < shownInputs.length; i++) {
    if (!isFormatValid(shownInputs[i])) {
      shownNotice[i].style.display = 'block';
      shownInputs[i].style.background = 'lightpink';
      valid = false;
    } else {
      shownNotice[i].style.display = 'none';
      shownInputs[i].style.background = 'white';
    }
  }
  return valid;
}

function checkSelectFormat(shownForm, valid) {
  if (currentForm) {
    const shownSelect = document.getElementById('street-type');
    const shownSelectNotice = shownForm.querySelector('.notice--select');
    if (shownSelect.value === '') {
      shownSelectNotice.style.display = 'block';
      valid = false;
    } else {
      shownSelectNotice.style.display = 'none';
    }
  }
  return valid;
}

/*******************************************
/     Validation
/******************************************/
function isFormValid() {
  const valid = true;
  const shownForm = forms[currentForm];
  const isInputValid = checkInputFormat(shownForm, valid);
  const isValid = checkSelectFormat(shownForm, isInputValid);
  return isValid;
}

function isFormatValid(input) {
  switch (input.name) {
    case 'email':
      return isEmailValid(input.value);
    case 'phone':
      return isPhoneValid(input.value);
    case 'postcode':
      return isPostcodeValid(input.value);
    case 'street-number':
      return isStreetNumValid(input.value);
    case 'first-name':
    case 'last-name':
    case 'street-name':
    case 'suburb':
      return isTextValid(input.value);
    default:
      return true;
  }
}

function isEmailValid(value) {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailFormat.test(value);
}

function isPhoneValid(value) {
  const phoneFormat = /^0[23478]\d{2}\s\d{3}\s\d{3}$/;
  return phoneFormat.test(value);
}

function isPostcodeValid(value) {
  return /^[0-9]{3,4}$/.test(value) && value >= 800 && value <= 7999;
}

function isStreetNumValid(value) {
  return /^[1-9]+[0-9]*$/.test(value);
}

function isTextValid(value) {
  return /^([a-zA-Z]+\s?)+$/.test(value);
}

/*******************************************
/     Bindings
/******************************************/
function bindEvent() {
  if (prevBtn) {
    prevBtn.addEventListener('click', () => nextPrev(-1));
  };
  if (nextBtn) {
    nextBtn.addEventListener('click', () => nextPrev(1));
  }
}

function unBindEvent() {
  prevBtn.removeEventListener('click', () => nextPrev(-1));
  nextBtn.removeEventListener('click', () => nextPrev(1));
}

module.exports = {
  isEmailValid,
  isPhoneValid,
  isPostcodeValid,
  isStreetNumValid,
  isTextValid,
}