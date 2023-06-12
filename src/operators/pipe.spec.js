import { seq } from '../creation/seq';
import { map } from './map';
import { filter } from './filter';

describe.skip('operators/pipe', () => {
  it('should compose operators using pipe', () => {
    const numbers = seq([1, 2, 3], 50);

    const composed = numbers.pipe(
      map((n) => n * 10),
      filter((n) => n < 30)
    );

    expect(composed).toSubscribe(({ next, complete }) => [
      next(10),
      next(20),
      complete(),
    ]);
  });
});
