let currentForm = 0; 
const forms = document.getElementsByClassName('form');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');

const showForm = (num) => {
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
  //showProgressBar(num);
}
showForm(currentForm);

const nextPrev = (num) => {
  // if (num === 1 && !validateForm())
  //   return false;
  forms[currentForm].style.display = "none";
  currentForm = currentForm + num;
  if (currentForm >= forms.length) {
    // function : 1,present form with data;
    //delete process bar and buttons
    console.log('data');
    return false;
  }
  showForm(currentForm);
}

prevBtn.addEventListener('click', () => nextPrev(-1));
nextBtn.addEventListener('click', () => nextPrev(1));
