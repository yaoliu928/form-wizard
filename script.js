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
console.log(inputValue);
prevBtn.addEventListener('click', () => nextPrev(-1));
nextBtn.addEventListener('click', () => nextPrev(1));
showForm(currentForm);
function showForm(num) {
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
  // if (num === 1 && !validateForm())
  //   return false; 
  forms[currentForm].style.display = "none";
  currentForm = currentForm + num;
  if (currentForm >= forms.length) {
    form.style.display = "none";
    result.style.display = 'block';
    for (i = 0; i < inputValue.length; i++) {
      const info = inputValue[i].value;
      resultItems[i].innerHTML = info;
    }
    stTypeResult.innerHTML = stTypeValue.value;
    return false;
  }
  showForm(currentForm);
}




