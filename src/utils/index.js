import axios from 'axios';
import config from 'config';

export { default as create } from './create';

export const api = axios.create({
  baseURL: config.onionful.endpoint,
  headers: {
    Space: config.onionful.space,
  },
});
