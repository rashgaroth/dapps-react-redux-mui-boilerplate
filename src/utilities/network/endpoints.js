const API_BASE_URL_DEV = 'http://localhost:1337/';
const API_BASE_URL_PROD = 'http://localhost:1337/';

const phases = process.env.REACT_APP_PHASES;
const BASE_URL = phases === 'dev' ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export default BASE_URL;
