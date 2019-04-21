import utils from './utils';

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
        domString += `<button class="${button.buttonClass}" id="${button.buttonId}">${button.buttonName}</button>`;
        domString += '</div>';
      });
      domString += '</div>';
    }
  });
  utils.printToDom(divToDisplay, domString);
};

const headerDomStringBuilder = () => {
  let domString = '';
  domString = '<h1 page-title>My Tamagotchi</h1>';
  utils.printHeaderToDom('app', domString);
};

export default {
  quadDomStringBuilder,
  headerDomStringBuilder,
};