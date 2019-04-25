/* module creates button event listener to be called in quadrant build/listener module function,
which is then called in get-quadrant-data,
which is finally called on page load in main.js */
// imports
import scoreChangers from './score-changer';

/* function adds event listeners to quadrant score buttons.
Passes in an array and a score div id
creates array from collection of score buttons by class name
loops over array and adds listener to each
Both parameters are passed in as arguments to scoreChanger function,
which is called on each button click */

const buttonEventListener = (selectedArray, selectedScoreDiv) => {
  const buttonsArray = Array.from(document.getElementsByClassName('quadrant-button'));
  buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      scoreChangers.scoreChanger(e, selectedArray, selectedScoreDiv);
    });
  });
};

// exports
export default {
  buttonEventListener,
};
