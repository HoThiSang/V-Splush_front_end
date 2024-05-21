import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BE_URL
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;