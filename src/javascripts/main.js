import '../styles/main.scss';
import fullQuadrants from './components/full/full-quadrant';
import dataGetters from './helpers/data/get-quadrant-data';
import domStringBuilders from './helpers/dom-string-builder';


// const getData = (quadrantArray) => {
//   domStringBuilders.quadDomStringBuilder(quadrantArray, 'eat');
//   eventListeners.buttonEventListener();
// };

const init = () => {
  domStringBuilders.headerDomStringBuilder();
  dataGetters.getQuadrantData(fullQuadrants.fullQuadrantLoad);
};
init();
