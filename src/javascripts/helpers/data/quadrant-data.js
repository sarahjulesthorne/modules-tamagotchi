import axios from 'axios';
const getQuadrantJs = () => axios.get('../db/quadrant-data.json');
export default {
  getQuadrantJs,
};
