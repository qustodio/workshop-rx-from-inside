import Observable from '../core/Observable';
import { isIterable, isPromise, isString } from '../core/helpers';

export const from = (xs) => {
  return new Observable((observer) => {
    let canceled = false;
    if (isPromise(xs)) {
      xs.then((x) => {
        if (!canceled) {
          observer.next(x);
          observer.complete();
        }
      }).catch((e) => {
        if (!canceled) {
          observer.error(e);
        }
      });
      return () => {
        canceled = true;
      };
    } else if (isIterable(xs) || isString(xs)) {
      for (const x of xs) {
        observer.next(x);
      }
      observer.complete();
      return () => {};
    }
  });
};
