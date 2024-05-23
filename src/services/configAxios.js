import axios from 'axios';

const axiosService  = axios.create({
    baseURL: process.env.REACT_APP_BE_URL
});

axiosService.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosService.defaults.headers.post['Content-Type'] = 'application/json';

const fetchWishlistData = async () => {
  const response = await axiosService.get('/show-allwishlist');
  if (response.data?.status !== 'success') {
    throw new Error('Invalid data format or API response.');
  }
  return response.data.data || [];
};

export { fetchWishlistData };
export default axiosService ;