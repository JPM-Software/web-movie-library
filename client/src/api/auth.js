import HttpClient from './httpClient';

export const loginUser = (login, password) => {
  return HttpClient.post(`/auth/login`, {
    login,
    password,
  });
};

export const registerUser = async userData => {
  return HttpClient.post(`/auth/register`, userData);
};
