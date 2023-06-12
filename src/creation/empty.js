import Observable from '../core/Observable';

export const empty = () => {
  return new Observable((/*observer*/) => {});
};
