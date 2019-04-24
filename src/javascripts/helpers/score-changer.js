import utils from './utils';

// const scoreChanger = (e, selectedArray, selectedScoreDiv) => {
// console.error(e.target.idselectedArray);
// console.error(selectedScoreDiv);
// console.error(selectedArray);
// };

const scoreChanger = (e, selectedArray, selectedScoreDiv) => {
  let selectedButtonValue = '';
  // let selectedScoreDiv = '';
  const scoreValue = parseInt(String(document.getElementById(selectedScoreDiv).innerHTML), 10);
  selectedArray.forEach((quadrant) => {
    const buttons = quadrant.quadrantButtons;
    const filteredButtons = buttons.filter(b => e.target.id === b.buttonId);
    if (filteredButtons.length) {
      selectedButtonValue = filteredButtons[0].buttonValue;
    }

    // quadrant.quadrantButtons.forEach((button) => {
    //   if (e.target.id === button.buttonId) {
    //     selectedScoreDiv = quadrant.scoreDivId;
    //   }
    // });
  });
  const finalScore = scoreValue + selectedButtonValue;
  if (finalScore <= 100) {
    utils.printToDom(selectedScoreDiv, finalScore);
  } else if (finalScore > 100) {
    utils.printToDom(selectedScoreDiv, 100);
  }
};

export default {
  scoreChanger,
};
