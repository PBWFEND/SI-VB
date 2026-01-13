import axios from 'axios';
import Cookies from 'js-cookie';

const Api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

Api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
});

Api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            Cookies.remove('token');
            window.location.href = '/login'; 
        }
        return Promise.reject(error);
    }
);


export default Api;