import { seq } from '../creation/seq';
import { merge } from './merge';

describe.skip('combination/merge', () => {
  it('should merge values', () => {
    const a = seq([1, 2], 25);
    const b = seq([3, 4], 50);
    const c = seq([5, 6], 100);

    const all = merge(a, b, c);

    return expect(all).toSubscribe(({ next, complete }) => [
      next(1),
      next(3),
      next(5),
      next(2),
      next(4),
      next(6),
      complete(),
    ]);
  });
});
