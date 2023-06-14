import { shareReplay } from './shareReplay';
import { seq } from '../creation/seq';

describe('operators/shareReplay', () => {
  it('should share values', () => {
    const numbers = seq([1, 2, 3, 4], 100);
    const sharedNumber = shareReplay(2)(numbers);

    return Promise.all([
      expect(sharedNumber).toSubscribe(({ next, complete }) => [
        next(1),
        next(2),
        next(3),
        next(4),
        complete(),
      ]),
      expect(sharedNumber).toSubscribe(
        ({ next, complete }) => [
          next(1),
          next(2),
          next(3),
          next(4),
          complete(),
        ],
        { subscribeAfter: 200 }
      ),
    ]);
  });
});
