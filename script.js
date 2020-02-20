let currentForm = 0;
const forms = document.getElementsByClassName('form');
const form = document.querySelector('.form-wrapper');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const completedBar = document.querySelector('.bar--completed');
const data = document.querySelector('.data');
const collectedData = document.getElementsByTagName('input');
console.log(collectedData);

const showForm = (num) => {
  forms[num].style.display = 'block';
  const percent = Math.floor((num + 1) * 100 / forms.length);
  completedBar.style.width = `${percent}%`;
  completedBar.innerHTML = `${percent}%`;
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
  //showProgressBar(num);
}
showForm(currentForm);

const nextPrev = (num) => {
  // if (num === 1 && !validateForm())
  //   return false; 
  forms[currentForm].style.display = "none";
  currentForm = currentForm + num;
  if (currentForm >= forms.length) {
    form.style.display = "none";
    data.style.display = 'block';

    // function : 1,present form with data;
    //delete process bar and buttons
    console.log('data');
    return false;
  }
  showForm(currentForm);
}

prevBtn.addEventListener('click', () => nextPrev(-1));
nextBtn.addEventListener('click', () => nextPrev(1));

collectedData.map.addEventListener('input', () => {
  console.log(e.target.value);
})
