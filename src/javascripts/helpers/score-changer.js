/* module creates scoreChanger function
to be called in event-listener function when button is clicked */
// imports
import utils from './utils';

/* Function changes inner HTML of score div based on value of clicked button
passes in parameters e, selectedArray, and selectedScoreDiv
initializes empty variable for value of clicked button
assigns parsed integer value of score div inner HTML to variable scoreValue
loops over selectedArray and assigns each quadrants buttons array to a variable
filters buttons array to select only buttons objects whose id match the id of the buttonc clicked
if filter results array has length,
assigns value of first item in array to button value variable from top of function
adds button value to initial scoreValue
if result is <= 100, prints result to DOM in score div
if > 100, prints 100 to score div */

const scoreChanger = (e, selectedArray, selectedScoreDiv) => {
  let selectedButtonValue = '';
  const scoreValue = parseInt(String(document.getElementById(selectedScoreDiv).innerHTML), 10);
  selectedArray.forEach((quadrant) => {
    const buttons = quadrant.quadrantButtons;
    const filteredButtons = buttons.filter(b => e.target.id === b.buttonId);
    if (filteredButtons.length) {
      selectedButtonValue = filteredButtons[0].buttonValue;
    }
  });
  const finalScore = scoreValue + selectedButtonValue;
  if (finalScore <= 100) {
    utils.printToDom(selectedScoreDiv, finalScore);
  } else if (finalScore > 100) {
    utils.printToDom(selectedScoreDiv, 100);
  }
};

// exports
export default {
  scoreChanger,
};
