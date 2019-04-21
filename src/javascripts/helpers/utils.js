const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += textToPrint;
};

const printHeaderToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  const prepend = document.createElement('header');
  prepend.innerHTML = textToPrint;
  selectedDiv.prepend(prepend);
};

export default {
  printToDom,
  printHeaderToDom,
};
