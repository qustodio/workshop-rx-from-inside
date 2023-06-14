import Observable from '../core/Observable';

export const of = (x) => {
  return new Observable((observer) => {
    observer.next(x);
    observer.complete();
  });
};
