import { take } from './take';
import { seq } from '../creation/seq';

describe.skip('operator/take', () => {
  it('should take n values', () => {
    const number = seq([1, 2, 3, 4], 50);
    const odds = take(2)(number);

    return expect(odds).toSubscribe(({ next, complete }) => [
      next(1),
      next(2),
      complete(),
    ]);
  });
});
