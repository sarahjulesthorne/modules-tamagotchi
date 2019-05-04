/* module builds function to be called in get-quadrant-data on  page load.
Builds play quadrant and calls event listener.
Arguments will be made explicit in main.js */
// imports

import domStringBuilders from '../../helpers/dom-string-builder';
import listeners from '../../helpers/event-listener';

/* function which passes in array and div id.
selectedArray gets passed into quadDomStringBuilder function
and used to build HTML for play quadrant.
 selectedScoreDiv gets passed into event listener and through there into the score changer function
 which the event listener calls. */

const playQuadrantLoad = (selectedArray, selectedScoreDiv) => {
  domStringBuilders.quadDomStringBuilder(selectedArray, 'play');
  listeners.buttonEventListener(selectedArray, selectedScoreDiv);
};

// exports
export default {
  playQuadrantLoad,
};
