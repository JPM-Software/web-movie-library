/* eslint-disable */
import axios from 'axios';
import qs from 'query-string';

const getClient = () => {
  const clientOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'brackets' });
    },
  };

  const client = axios.create(clientOptions);

  const setErrorMessage = error => {
    switch (error.response?.status) {
      case 400:
        console.error('Error API 400:', error?.response?.message);
        break;
      case 401:
        console.error('Error API 401:', error?.response?.message);
        break;
      case 403:
        console.error('Error API 403:', error?.response?.message);
        break;
      case 404:
        console.error('Error API 404:', error?.response?.message);
        break;
      default:
        console.error('Error API other:', error?.response?.message);
        break;
    }
    return error.response;
  };

  const setStatusOk = response => {
    if (response.status >= 200 && response.status < 400) {
      return {
        ...response,
        statusOk: true,
      };
    } else {
      return {
        ...response,
        statusOk: false,
      };
    }
  };

  const handleSuccess = response => {
    return setStatusOk(response);
  };

  const handleError = error => {
    return setErrorMessage(error);
  };

  client.interceptors.response.use(handleSuccess, handleError);

  const setBearerToken = token => {
    return `Bearer ${token}`;
  };

  client.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = setBearerToken(token);
      return config;
    } else {
      return config;
    }
  });

  return client;
};

class HttpClient {
  constructor() {
    this.client = getClient();
    this.endpointPrefix = '/api';
  }

  request(config) {
    const preparedConfig = {
      ...config,
      url: `${this.endpointPrefix}${config.url}`,
    };
    return this.client(preparedConfig)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  get(endpoint, config = {}) {
    return this.client
      .get(`${this.endpointPrefix}${endpoint}`, config)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(endpoint, body = {}, config = {}) {
    return this.client
      .post(`${this.endpointPrefix}${endpoint}`, body, config)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(endpoint, body = {}, config = {}) {
    return this.client
      .put(`${this.endpointPrefix}${endpoint}`, body, config)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export default new HttpClient();
