import axios from 'axios';

const domainApi = window.document.location.href.includes('localhost') ? 'http://localhost:8000' : 'https://herokuapp.com:8000';

// TODO: // Add your admin user credentials here to login automatically
const adminUserSecretCredentials = {
    username: '',
    email: '',
    password: '',
};

export const handleLogout = async () => {
    try {
      await API.post('/logout/');
      localStorage.removeItem('authToken'); // Clear token
    //   alert('Logged out successfully!');
    } catch (err) {
      alert('Logout failed.');
    }
  };

export const temporaryLogin = async () => {
    try {
        const response = await axios.post(`${domainApi}/dj-rest-auth/login/`, adminUserSecretCredentials);
        const { key } = response.data;
        localStorage.setItem
            ('authToken', key);
    } catch (error) {
        console.error('Failed to login with temporary credentials:', error);
    }
}

const API = axios.create({
    baseURL: `${domainApi}/dj-rest-auth`, 
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
