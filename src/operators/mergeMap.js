import Observable from '../core/Observable';

export const mergeMap = (f) => (observable) => {
  return new Observable((observer) => {
    let subscriptions = [];
    let isCompleted = false;

    const subscription = observable.subscribe(
      (data) => {
        const innerObservable = f(data);

        const innerSubscription = innerObservable.subscribe(
          (innerData) => observer.next(innerData),
          (innerError) => observer.error(innerError),
          () => {
            subscriptions = subscriptions.filter(
              (inner) => inner !== innerSubscription
            );
            if (isCompleted && subscriptions.length === 0) {
              observer.complete();
            }
          }
        );

        subscriptions.push(innerSubscription);
      },
      (e) => observer.error(e),
      () => {
        isCompleted = true;
        if (isCompleted && subscriptions.length === 0) {
          observer.complete();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  });
};
