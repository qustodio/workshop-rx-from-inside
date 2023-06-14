import { of } from './of';

describe('creation/of', () => {
  it('should put as value into observable', () => {
    return expect(of('A')).toSubscribe(({ next, complete }) => [
      next('A'),
      complete(),
    ]);
  });
});
