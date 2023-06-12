import Observable from '../core/Observable';

export const seq = (xs, ms) => {
  return new Observable((observer) => {
    let i = 0;
    const [head, ...tail] = xs;
    observer.next(head);

    const id = setInterval(() => {
      if (i === tail.length) {
        clearInterval(id);
        observer.complete();
      } else {
        observer.next(tail[i++]);
      }
    }, ms);

    return () => clearInterval(id);
  });
};
