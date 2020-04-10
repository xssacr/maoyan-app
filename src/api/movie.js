import { get } from './http';

export const getHotShowing = params => {
  const url = '/api/ajax/hotshowing';
  return get(url, params);
}