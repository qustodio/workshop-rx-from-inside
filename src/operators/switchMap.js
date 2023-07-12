import Observable from '../core/Observable';

export const switchMap = (f) => (observable) => {
  return new Observable((observer) => {
    let innerSubscription;
    let subscription;
    let isCompletedInner = false;
    let isCompletedOuter = false;

    subscription = observable.subscribe(
      (data) => {
        innerSubscription?.unsubscribe();

        const innerObservable = f(data);

        innerSubscription = innerObservable.subscribe(
          (innerData) => observer.next(innerData),
          (e) => observer.error(e),
          () => {
            isCompletedInner = true;
            if (isCompletedInner && isCompletedOuter) {
              observer.complete();
            }
          }
        );
      },
      (e) => observer.error(e),
      () => {
        isCompletedOuter = true;
        if (isCompletedInner && isCompletedOuter) {
          observer.complete();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
      innerSubscription?.unsubscribe();
    };
  });
};
