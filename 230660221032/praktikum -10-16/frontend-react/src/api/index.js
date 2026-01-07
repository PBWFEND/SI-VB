import axios from 'axios';

const Api = axios.create({
    // URL ke Backend Express
    baseURL: 'http://localhost:3000'
});

export default Api;