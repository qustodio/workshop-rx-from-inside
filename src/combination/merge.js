import Observable from '../core/Observable';
import { empty } from '../creation/empty';

const merge2 = (/*xs, ys*/) => {
  return new Observable((/*observer*/) => {});
};

export const merge = (...xs) => {
  return xs.reduce(merge2, empty());
};
