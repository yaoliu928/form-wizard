let currentForm = 0; 
showTab(currentForm);

const showForm = (num) => {
  const x = document.getElementsByClassName('form');
  x[num].style.display = 'block';
  if (num) {
    document.getElementByClassName("btn--prev").style.display = "inline";
    document.getElementByClassName("btn--next").innerHTML = "Submit";   
  } else {
    document.getElementByClassName("btn--prev").style.display = "none";
    document.getElementByClassName("btn--next").innerHTML = "Next";  
  }
  fixStepIndicator(n)
}