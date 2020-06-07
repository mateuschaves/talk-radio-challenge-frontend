import axios from 'axios';

const api = axios.create({
    baseURL: 'https://talk-radio-challenge-backend.herokuapp.com'
});

export default api;