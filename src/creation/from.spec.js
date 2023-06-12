const { from } = require('./from');

describe.skip('creation/from', () => {
  it('should transform iterables into observable', () => {
    return expect(from([1, 2, 3])).toSubscribe(({ next, complete }) => [
      next(1),
      next(2),
      next(3),
      complete(),
    ]);
  });

  it('should transform string into observable of charts', () => {
    return expect(from('Hi!')).toSubscribe(({ next, complete }) => [
      next('H'),
      next('i'),
      next('!'),
      complete(),
    ]);
  });

  it('should transform promise into observable', () => {
    return expect(from(Promise.resolve(1))).toSubscribe(
      ({ next, complete }) => [next(1), complete()]
    );
  });

  it('should transform promise into observable and handle errors', () => {
    return expect(from(Promise.reject('oops!'))).toSubscribe(({ error }) => [
      error('oops!'),
    ]);
  });
});
