import utils from './utils';

const scoreChanger = (e, selectedArray, selectedScoreDiv) => {
  let selectedButtonValue = '';
  // let selectedScoreDiv = '';
  const scoreDiv = document.getElementById(selectedScoreDiv);
  selectedArray.forEach((quadrant) => {
    const buttons = quadrant.quadrantButtons;
    const filteredButtons = buttons.filter(b => e.target.id === b.buttonId);
    selectedButtonValue = filteredButtons[0].buttonValue;
    // quadrant.quadrantButtons.forEach((button) => {
    //   if (e.target.id === button.buttonId) {
    //     selectedScoreDiv = quadrant.scoreDivId;
    //   }
    // });
  });
  const finalScore = parseInt(scoreDiv.innerHTML, 10) + selectedButtonValue;
  if (finalScore <= 100) {
    utils.printToDom(selectedScoreDiv, finalScore);
  } else if (finalScore > 100) {
    utils.printToDom(selectedScoreDiv, 100);
  }
};

export default {
  scoreChanger,
};
