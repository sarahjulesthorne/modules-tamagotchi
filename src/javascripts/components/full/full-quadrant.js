import domStringBuilders from '../../helpers/dom-string-builder';
import listeners from '../../helpers/event-listener';

const fullQuadrantLoad = (selectedArray, selectedScoreDiv) => {
  domStringBuilders.quadDomStringBuilder(selectedArray, 'eat');
  listeners.buttonEventListener(selectedArray, selectedScoreDiv);
};

export default {
  fullQuadrantLoad,
};
