import axios from 'axios';

const axiosService  = axios.create({
    baseURL: process.env.REACT_APP_BE_URL
});

axiosService.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosService.defaults.headers.post['Content-Type'] = 'application/json';

axiosService.interceptors.response.use(function (response) {

    if (response.data?.status !== 'success') {
      throw new Error('Invalid data format or API response.');
    }
    return response || {};
}, function (error) {
      return Promise.reject(error);
    });

export default axiosService ;