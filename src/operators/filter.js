import Observable from '../core/Observable';

export const filter = (p) => (observable) => {
  return new Observable((observer) => {
    const sub = observable.subscribe(
      (x) => {
        if (p(x)) observer.next(x);
      },
      (e) => observer.error(e),
      () => observer.complete()
    );

    return () => sub.unsubscribe();
  });
};
