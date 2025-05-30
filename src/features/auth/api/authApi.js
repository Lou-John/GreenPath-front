const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/Users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Login failed');
  return await response.json();
};

export const register = async (userData) => {
   console.log(userData);
  const response = await fetch(`${API_BASE_URL}/Users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Registration failed');
  return await response.json();
};