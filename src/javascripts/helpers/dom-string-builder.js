/* module creates header and quadrant domStrings
to be called in main.js and quadrant build/listener modules, respectively */
// imports
import utils from './utils';

/* function creates domString for designated quadrant.
passes in array to be used in loop and div to be passed into print function */

const quadDomStringBuilder = (arrayToPrint, divToDisplay) => {
  let domString = '';
  arrayToPrint.forEach((quadrant) => {
    if (quadrant.quadDivId === divToDisplay) {
      domString += `<div class="quadrant-title-container  ${quadrant.quadDivId}-quadrant-title-container" id="${quadrant.quadDivId}QuadrantTitleContainer">`;
      domString += `<h3 class="quadrant-title ${quadrant.quadDivId}-quadrant-title" id="${quadrant.quadDivId}QuadrantTitle">${quadrant.quadName}</h3>`;
      domString += `<p class="quadrant-score ${quadrant.quadDivId}-score" id="${quadrant.scoreDivId}">${quadrant.quadScoreValue}</p>`;
      domString += '</div>';
      domString += `<div class="${quadrant.quadDivId}-button-container quadrant-button-container" id="${quadrant.quadDivId}ButtonContainer">`;
      quadrant.quadrantButtons.forEach((button) => {
        domString += `<div class="button-container ${quadrant.quadDivId}-button-container" id="${quadrant.buttonId}Container">`;
        domString += `<button class="${button.buttonClass}" name="${button.buttonNameAttribute}" id="${button.buttonId}">${button.buttonName}</button>`;
        domString += '</div>';
      });
      domString += '</div>';
    }
  });
  utils.printToDom(divToDisplay, domString);
};

/* function creates heading in domString
passes string into print function which appends header to DOM
and passes in domString as innerHTML */
const headerDomStringBuilder = () => {
  let domString = '';
  domString = '<h1 page-title>My Tamagotchi</h1>';
  utils.printHeaderToDom('app', domString);
};

// exports
export default {
  quadDomStringBuilder,
  headerDomStringBuilder,
};
