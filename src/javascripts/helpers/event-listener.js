import utils from './utils';

const buttonEventListener = () => {
  const buttonsArray = Array.from(document.getElementsByClassName('quadrant-button'));
  buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.name === 'eatQuadrantButton') {
        utils.printToDom('sleep', e.target.id);
      } else if (e.target.name === 'playQuadrantButton') {
        console.error(e.target.id);
      } else if (e.target.name === 'fightQuadrantButton') {
        console.error(e.target.id);
      } else if (e.target.name === 'sleepQuadrantButton') {
        console.error(e.target.id);
      }
    });
  });
};

export default {
  buttonEventListener,
};
