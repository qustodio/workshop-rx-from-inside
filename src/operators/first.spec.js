import { first } from './first';
import { seq } from '../creation/seq';

describe.skip('operator/first', () => {
  it('should take first value', () => {
    const number = seq([1, 2, 3], 50);
    const one = first()(number);

    return expect(one).toSubscribe(({ next, complete }) => [
      next(1),
      complete(),
    ]);
  });
});
