import utils from './utils';

const buttonEventListener = () => {
  const buttonsArray = Array.from(document.getElementsByClassName('quadrant-button'));
  buttonsArray.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.name === 'eatQuadrantButton') {
        utils.printToDom('sleep', e.target.id);
      }
    });
  });
};

export default {
  buttonEventListener,
};
