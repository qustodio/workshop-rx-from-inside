import Observable from '../core/Observable';

export const map = (f) => (observable) => {
  return new Observable((observer) => {
    return observable.subscribe(
      (x) => observer.next(f(x)),
      (e) => observer.next(e),
      () => observer.complete()
    );
  });
};
