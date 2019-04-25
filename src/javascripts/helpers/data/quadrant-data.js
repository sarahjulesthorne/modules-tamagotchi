// module creates quadrant data request to be used in get-quadrant-data.js
// imports
import axios from 'axios';

// function which creates data request from quadrant-data.json using axios
const getQuadrantJs = () => axios.get('../db/quadrant-data.json');

// exports
export default {
  getQuadrantJs,
};
