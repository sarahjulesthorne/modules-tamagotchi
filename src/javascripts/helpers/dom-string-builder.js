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
      domString += `<div class="padding quadrant-title-container" id="${quadrant.quadDivId}QuadrantTitleContainer">`;
      domString += `<h3 class="centered padding" id="${quadrant.quadDivId}QuadrantTitle">${quadrant.quadName}</h3>`;
      domString += `<p class="centered padding" id="${quadrant.scoreDivId}">${quadrant.quadScoreValue}</p>`;
      domString += '</div>';
      domString += `<div class="padding quadrant-button-container" id="${quadrant.quadDivId}ButtonContainer">`;
      quadrant.quadrantButtons.forEach((button) => {
        domString += `<div class="padding" id="${quadrant.buttonId}Container">`;
        domString += `<button class="padding ${button.buttonClass}" name="${button.buttonNameAttribute}" id="${button.buttonId}">${button.buttonName}</button>`;
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
  domString = '<h1 class="padding centered">My Tamagotchi</h1>';
  utils.printHeaderToDom('app', domString);
};

// exports
export default {
  quadDomStringBuilder,
  headerDomStringBuilder,
};
