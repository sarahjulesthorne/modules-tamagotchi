// module creates print functions to be called throughout application

// print function which prints designated string to designated element
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

/* function creates new header element,
sets its innerHTML to designated variable's value,
and prepends the header to selected element */

const printHeaderToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  const prepend = document.createElement('header');
  prepend.innerHTML = textToPrint;
  selectedDiv.prepend(prepend);
};

// exports
export default {
  printToDom,
  printHeaderToDom,
};
