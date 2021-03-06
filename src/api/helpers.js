import jwt from 'jsonwebtoken';

export const decodeToken = token => {
  return jwt.decode(token);
};

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, 'SALT', { expiresIn });
  return localStorage.setItem('encodedUser', encodedUser);
};

export const getEncodedUser = () => {
  const encodedUser = localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  localStorage.removeItem('encodedUser');
  return null;
};

export const isAdmin = () => {
  if (decodeToken(getToken()).admin === true) return true;
  return false;
};

export const getItem = name => {
  const item = localStorage.getItem(name);
  return item;
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};

export const setItem = (name, value) => {
  localStorage.setItem(name, value);
};
