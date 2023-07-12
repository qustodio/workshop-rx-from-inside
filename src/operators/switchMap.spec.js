import { switchMap } from './switchMap';
import { seq } from '../creation/seq';

describe('operators/switchMap', () => {
  it('should flat observables values', () => {
    const numbers = seq([1, 2, 3], 50);
    const pairs = switchMap((x) =>
      seq(
        [
          [x, 1],
          [x, 2],
        ],
        25
      )
    )(numbers);

    return expect(pairs).toSubscribe(({ next, complete }) => [
      next([1, 1]),
      next([1, 2]),
      next([2, 1]),
      next([2, 2]),
      next([3, 1]),
      next([3, 2]),
      complete(),
    ]);
  });

  it('should cancel observables values', () => {
    const numbers = seq([1, 2, 3], 50);
    const pairs = switchMap((x) =>
      seq(
        [
          [x, 1],
          [x, 2],
        ],
        60
      )
    )(numbers);

    return expect(pairs).toSubscribe(({ next, complete }) => [
      next([1, 1]),
      next([2, 1]),
      next([3, 1]),
      next([3, 2]),
      complete(),
    ]);
  });
});
