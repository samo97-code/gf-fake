import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.BaseApiUrl,
});

export default axiosInstance;