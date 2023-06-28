import Observable from '../core/Observable';
import { empty } from '../creation/empty';

const concat2 = (xs, ys) => {
  let subs;

  return new Observable((observer) => {
    subs = xs.subscribe(
      (x) => observer.next(x),
      (e) => observer.error(e),
      () => {
        subs = ys.subscribe(
          (x) => observer.next(x),
          (e) => observer.error(e),
          () => {
            observer.complete();
          }
        );
      }
    );

    return () => {
      subs.unsubscribe();
    };
  });
};

export const concat = (...xs) => {
  return xs.reduce(concat2, empty());
};
