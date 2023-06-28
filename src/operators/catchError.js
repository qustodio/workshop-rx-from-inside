import Observable from '../core/Observable';

export const catchError = (errorManager) => (observable) => {
  let innerSub;
  let errorSub;

  return new Observable((observer) => {
    const errorObservable = (err) => {
      errorSub = errorManager(err).subscribe(
        (x) => observer.next(x),
        (e) => observer.error(e),
        () => observer.complete()
      );
    };

    innerSub = observable.subscribe(
      (x) => observer.next(x),
      (e) => errorObservable(e),
      () => observer.complete()
    );

    return () => {
      innerSub.unsubscribe();
      errorSub?.unsubscribe();
    };
  });
};
