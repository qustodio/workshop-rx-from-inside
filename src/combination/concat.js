import Observable from '../core/Observable';
import { empty } from '../creation/empty';

const concat2 = (/*xs, ys*/) => {
  return new Observable((/*observer*/) => {});
};

export const concat = (...xs) => {
  return xs.reduce(concat2, empty());
};
