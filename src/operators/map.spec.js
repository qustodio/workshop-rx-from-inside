import { map } from './map';
import { seq } from '../creation/seq';

describe('operator/map', () => {
  it('should transform values', () => {
    const number = seq([1, 2, 3], 50);
    const doubles = map((n) => n * 2)(number);

    return expect(doubles).toSubscribe(({ next, complete }) => [
      next(2),
      next(4),
      next(6),
      complete(),
    ]);
  });
});
