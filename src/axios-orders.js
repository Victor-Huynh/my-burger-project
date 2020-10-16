import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8a5c0.firebaseio.com/' 
});

export default instance;