import { api } from 'utils';
import * as types from './types';

export const fetchPages = () => ({
  type: types.PAGES_LIST,
  payload: api.get('/pages'),
});

export const fetchPage = id => ({
  type: types.PAGES_GET,
  payload: api.get('/pages', { id }),
});
