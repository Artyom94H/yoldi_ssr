import axios from 'axios';
import AuthService from '@/services/Auth';
import getConfig from 'next/config';

class Api {
  constructor(resource = '') {
    const {
      publicRuntimeConfig: { apiUrl },
    } = getConfig();
    this.url = `${apiUrl}/${resource}`;
  }

  list = (params) => {
    return this.buildQuery('get', params);
  };

  get = (id, params = {}) => {
    return this.buildQuery('get', params, id);
  };

  create = (params) => {
    return this.buildQuery('post', params);
  };

  put = (id, params) => {
    return this.buildQuery('put', params, id);
  };

  patch = (id, params) => {
    return this.buildQuery('patch', params, id);
  };

  destroy = (id) => {
    return this.buildQuery('delete', {}, id);
  };

  buildQuery = (method, params = { props: {} }, prefix) => {
    const props = params?.props || {};
    return axios({
      url: this.getFullUrl(prefix),
      method,
      data: params.data,
      params: params.params,
      responseType: params.responseType, // important
      ...props,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AuthService.getToken()}`,
        // X-API-KEY for current project, Bearer for JWT auth token
        'X-API-KEY': AuthService.getToken(),
        ...(params?.headers || {}),
      },
    });
  };

  getFullUrl = (prefix) => {
    return `${this.url}${prefix ? `/${prefix}` : ''}`;
  };
}

export default Api;
