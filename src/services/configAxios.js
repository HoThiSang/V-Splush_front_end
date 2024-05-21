import axios from 'axios';

const axiosService  = axios.create({
    baseURL: process.env.REACT_APP_BE_URL
});

axiosService.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosService.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosService ;