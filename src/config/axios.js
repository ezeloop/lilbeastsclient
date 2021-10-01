import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://lilbeastscenter.herokuapp.com/'
});

export default clientAxios;