/* module serves as entry point for app and initializes functions to be called on page load.
Builds all initial content and makes arguments explicit or score changer function */
// imports

import '../styles/main.scss';
import fullQuadrants from './components/full/full-quadrant';
import playQuadrants from './components/play/play-quadrant';
import fightQuadrants from './components/fight/fight-quadrant';
import dataGetters from './helpers/data/get-quadrant-data';
import domStringBuilders from './helpers/dom-string-builder';

/* init function which builds header and quadrants
 and page load and initializes score change events via a chain of function calls */


const init = () => {
  domStringBuilders.headerDomStringBuilder();
  dataGetters.getQuadrantData(fullQuadrants.fullQuadrantLoad, 'eatScoreDiv');
  dataGetters.getQuadrantData(playQuadrants.playQuadrantLoad, 'playScoreDiv');
  dataGetters.getQuadrantData(fightQuadrants.fightQuadrantLoad, 'fightScoreDiv');
};
init();
