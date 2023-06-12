import { seq } from './seq.js';

describe('seq', () => {
  it('should emit values and complete', () => {
    return expect(seq([1, 2, 3], 250)).toSubscribe(({ next, complete }) => [
      next(1),
      next(2),
      next(3),
      complete(),
    ]);
  });
});
