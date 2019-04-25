/* module creates function to be called in init in main.js.
Function will be called four times,
once for each quadrant,
and pass in that quadrant's build/listener module function
and the designated score div id which will be modified by scoreChanger */

// imports
import data from './quadrant-data';

// initialized empty array for holding array from data request
let quadrants = [];

/* function called in main.js in init function to call each quadrant function in turn
Function passes in quadrantFunction and selectedScoreDiv parameters
Function calls data request from quadrant-data.js and creates promises
then promise assigns quadrants array to quadrants variable
and calls quadrantFunction,
passing in quadrants array and selectedScoreDiv as parameters
catch console.errors the error */

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

// exports
export default {
  getQuadrantData,
};
