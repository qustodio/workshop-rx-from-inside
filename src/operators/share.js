import Subject from '../core/Subject';

export const share = () => (observable) => {
  const subject = new Subject();
  let isSubscribed = false;

  const subscribe = (next, error, complete) => {
    const subscription = subject.subscribe(next, error, complete);

    if (!isSubscribed) {
      observable.subscribe(
        (x) => subject.next(x),
        (e) => subject.error(e),
        () => subject.complete()
      );

      isSubscribed = true;
    }

    return subscription;
  };
  return { subscribe };
};
