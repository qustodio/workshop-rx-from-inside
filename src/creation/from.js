import Observable from '../core/Observable';
import { isIterable, isPromise, isString } from '../core/helpers';

export const from = (xs) => {
  return new Observable((/*observer*/) => {
    if (isPromise(xs)) {
      return () => {};
    } else if (isIterable(xs) || isString(xs)) {
      return () => {};
    }
  });
};
