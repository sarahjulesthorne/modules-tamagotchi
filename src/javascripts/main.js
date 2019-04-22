import '../styles/main.scss';
import dataGetters from './helpers/data/get-quadrant-data';
import domStringBuilders from './helpers/dom-string-builder';
import eventListeners from './helpers/event-listener';

const getData = (quadrantArray) => {
  domStringBuilders.quadDomStringBuilder(quadrantArray, 'eat');
  eventListeners.buttonEventListener();
};

const init = () => {
  domStringBuilders.headerDomStringBuilder();
  dataGetters.getQuadrantData(getData);
};
init();
