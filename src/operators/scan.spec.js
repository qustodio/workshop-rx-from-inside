import { scan } from './scan';
import { seq } from '../creation/seq';

describe.skip('operator/scan', () => {
  it('should reduce values', () => {
    const number = seq([1, 2, 3], 50);
    const sum = scan((a, b) => a + b, 0)(number);

    return expect(sum).toSubscribe(({ next, complete }) => [
      next(1),
      next(3),
      next(6),
      complete(),
    ]);
  });
});
