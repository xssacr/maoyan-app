import { get } from './http';

export const getHotShowing = params => {
  const url = '/api/ajax/hotshowing';
  return get(url, params);
}

export const getMostExpected = params => {
  const url = '/api/ajax/mostexpected';
  console.log(params);
  return get(url, params);
}