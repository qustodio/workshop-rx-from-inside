import { filter } from './filter';
import { seq } from '../creation/seq';

describe('operator/filter', () => {
  it('should filter values', () => {
    const number = seq([1, 2, 3], 50);
    const odds = filter((n) => n % 2 !== 0)(number);

    return expect(odds).toSubscribe(({ next, complete }) => [
      next(1),
      next(3),
      complete(),
    ]);
  });
});
