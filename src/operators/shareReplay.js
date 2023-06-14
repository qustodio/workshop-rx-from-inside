import ReplaySubject from '../core/ReplaySubject';

export const shareReplay = (bufferSize) => (observable) => {
  const subject = new ReplaySubject(bufferSize);
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
