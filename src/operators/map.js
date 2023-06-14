import Observable from '../core/Observable';

export const map = (f) => (observable) => {
  return new Observable((observer) => {
    const sub = observable.subscribe(
      (x) => observer.next(f(x)),
      (e) => observer.error(e),
      () => observer.complete()
    );

    return () => sub.unsubscribe();
  });
};
