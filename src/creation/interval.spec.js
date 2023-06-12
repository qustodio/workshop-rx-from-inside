import { interval } from './interval';

describe.skip('creation/interval', () => {
  it('should create an interval observable and cancel', () => {
    const expected = ({ next, cancel }) => [
      next(0),
      next(1),
      next(2),
      cancel(),
    ];

    return expect(interval(250)).toSubscribe(expected, { cancelAfter: 3 });
  });
});
