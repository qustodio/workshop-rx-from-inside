import Observable from '../core/Observable';

export const interval = (ms) => {
  return new Observable((observer) => {
    let i = 0;
    const interval = setInterval(() => {
      observer.next(i);
      i++;
    }, ms);

    return () => {
      clearInterval(interval);
    };
  });
};
