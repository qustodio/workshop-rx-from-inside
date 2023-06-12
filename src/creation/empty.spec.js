const { empty } = require('./empty');

describe.skip('creation/empty', () => {
  it('should not emit values', () => {
    return expect(empty()).toSubscribe(({ complete }) => [complete()]);
  });
});
