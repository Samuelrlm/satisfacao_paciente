import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://satisfacaopaciente.kinghost.net:21019'
    baseURL: 'https://api-satisfacao.herokuapp.com'
})

export default api;
