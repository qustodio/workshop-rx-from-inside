import { seq } from '../creation/seq';
import { concat } from './concat';

describe.skip('combination/concat', () => {
  it('should concat values', () => {
    const a = seq([1, 2], 50);
    const b = seq([3, 4], 50);
    const c = seq([5, 6], 50);

    const all = concat(a, b, c);

    return expect(all).toSubscribe(({ next, complete }) => [
      next(1),
      next(2),
      next(3),
      next(4),
      next(5),
      next(6),
      complete(),
    ]);
  });
});
