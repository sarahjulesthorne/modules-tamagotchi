import data from './quadrant-data';

let quadrants = [];

const getQuadrantData = (quadrantFunction, selectedScoreDiv) => {
  data.getQuadrantJs()
    .then((response) => {
      const quadrantsArray = response.data.quadrants;
      quadrants = quadrantsArray;
      quadrantFunction(quadrants, selectedScoreDiv);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  getQuadrantData,
};
