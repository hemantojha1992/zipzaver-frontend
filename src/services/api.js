import axios from 'axios';

const baseURL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

export const api = axios.create({
  baseURL,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('zipzaver_admin_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function getErrorMessage(error) {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.code === 'ERR_NETWORK') return `API se connect nahi ho pa raha: ${baseURL}. API URL, CORS aur server check karein.`;
  return error?.message || 'Kuch galat ho gaya. Dobara try karein.';
}

export function unwrapData(response) {
  const body = response?.data;
  return body && Object.prototype.hasOwnProperty.call(body, 'data') ? body.data : body;
}
