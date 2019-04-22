import '../styles/main.scss';
import data from './helpers/data/quadrant-data';
import domStringBuilders from './helpers/dom-string-builder';
import eventListeners from './helpers/event-listener';

let quadrants = [];

const getData = () => {
  data.getQuadrantJs()
    .then((response) => {
      const quadrantsArray = response.data.quadrants;
      quadrants = quadrantsArray;
      domStringBuilders.quadDomStringBuilder(quadrants, 'eat');
      eventListeners.buttonEventListener();
    })
    .catch((error) => {
      console.error(error);
    });
};

const init = () => {
  domStringBuilders.headerDomStringBuilder();
  getData();
};
init();
