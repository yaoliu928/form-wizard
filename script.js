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

showForm(currentForm);
function showForm(num) {
  //show current form
  forms[num].style.display = 'block';
  // show button
  if (!num) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline";
  }
  if (num === forms.length - 1) {
    nextBtn.innerHTML = "Submit";
  } else {
    nextBtn.innerHTML = "Next";
  }
  //show progress bar;
  const percent = Math.floor((num + 1) * 100 / forms.length);
  completedBar.style.width = `${percent}%`;
  completedBar.innerHTML = `${percent}%`;
}

function nextPrev(num) {
  // 当前页有 invalidate
  if (num === 1 && !isFormValid())
    return false;
  //不显示当前页，更新页码，显示下一页
  forms[currentForm].style.display = "none";
  currentForm += num;
  // 当前页为最后一页时
  if (currentForm === forms.length) {
    //删除表格，显示结果
    form.style.display = "none";
    result.style.display = 'block';
    //赋予结果数据
    for (let i = 0; i < inputValue.length; i++) {
      const info = inputValue[i].value;
      resultItems[i].innerHTML = info;
    }
    stTypeResult.innerHTML = stTypeValue.value;
    return false;
  }
  showForm(currentForm);
}
function isFormValid() {
  let valid = true;
  const shownForm = forms[currentForm];
  console.log(shownForm);
  const shownInputs = shownForm.getElementsByTagName('input');
  const shownSpans = shownForm.getElementsByClassName('notice');
  for (let i = 0; i < shownInputs.length; i++) {
    if (!isFormatValid(shownInputs[i])) {
      shownSpans[i].style.display = 'inline';
      valid = false;
    }
  }
  if (currentForm) {
    const shownSelect = shownForm.getElementById('street-type');
    const shownSelectSpan = shownForm.querySelector('.notice--select');
    if (shownSelect.value === '') {
      shownSelectSpan.style.display = 'inline';
      valid = false;
    }
  }
  //只要有一个 valid=false 就 return false
  return valid;
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
    case 'first-name' || 'last-name' || 'street-name' || 'suburb':
      return isTextValid(input.value);
    default:
      return true;
  }
};
function isEmailValid(value) {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailFormat.test(value);
}
function isPhoneValid(value) {
  const phoneFormat = /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[23478]\)|0[23478])?( ?-?[0-9]){7,9}$/;
  return value === '' || phoneFormat.test(value);
}
function isPostcodeValid(value) {
  const postcode = parseInt(value, 10);
  return (postcode >= 800 && postcode <= 7999);
}
function isStreetNumValid(value) {
  return /^\+?([1-9]\d*)$/.test(value);
}
function isTextValid(value) {
  return /^[a-zA-Z]+$/.test(value);
}








