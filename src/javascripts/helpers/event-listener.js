/* module creates button event listener to be called in quadrant build/listener module function,
which is then called in get-quadrant-data,
which is finally called on page load in main.js */
// imports
import scoreChangers from './score-changer';

/* function adds event listeners to  score buttons by quadrant.
Passes in an array and a score div id
creates arrays from collection of score buttons by class name and by quadrant
uses switch statement to determine condition in which each quadrant's listeners will be added.
loops over array and adds listener to each
Both parameters are passed in as arguments to scoreChanger function,
which is called on each button click */

const buttonEventListener = (selectedArray, selectedScoreDiv) => {
  const eatButtonsArray = Array.from(document.getElementsByClassName('eat-quadrant-button'));
  const playButtonsArray = Array.from(document.getElementsByClassName('play-quadrant-button'));
  const fightButtonsArray = Array.from(document.getElementsByClassName('fight-quadrant-button'));
  const sleepButtonsArray = Array.from(document.getElementsByClassName('sleep-quadrant-button'));
  let buttonsArray = [];
  switch (selectedScoreDiv) {
    case 'eatScoreDiv':
      buttonsArray = eatButtonsArray;
      break;

    case 'playScoreDiv':
      buttonsArray = playButtonsArray;
      break;

    case 'fightScoreDiv':
      buttonsArray = fightButtonsArray;
      break;

    case 'sleepScoreDiv':
      buttonsArray = sleepButtonsArray;
      break;

    default:
      break;
  }

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
