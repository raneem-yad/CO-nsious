import axios from 'axios';

export const tokenAuth = 'c16414b2d3f88278c3f7aac148f7d96cadfbdddf'
const domainApi = window.document.location.href.includes('localhost') ? 'http://localhost:8000' : 'https://co2nsciousapp-8e3344a058b5.herokuapp.com';

export const handleLogout = async () => {
    try {
      await API.post('/logout/');
      localStorage.removeItem('authToken'); // Clear token
    //   alert('Logged out successfully!');
    } catch (err) {
      // console.error('Logout failed.');
    }
};
  
const API = axios.create({
    baseURL: `${domainApi}`, 
});

// Add an interceptor to include tokens in requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
