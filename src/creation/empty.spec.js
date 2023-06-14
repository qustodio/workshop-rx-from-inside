const { empty } = require('./empty');

describe('creation/empty', () => {
  it('should not emit values', () => {
    return expect(empty()).toSubscribe(({ complete }) => [complete()]);
  });
});
