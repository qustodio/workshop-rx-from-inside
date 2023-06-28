import { catchError } from './catchError';
import { seq } from '../creation/seq';
import Observable from '../core/Observable';

describe('operator/catchError', () => {
  it('should catch errors producer on observable', () => {
    const withError = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      throw new Error('oops!');
    });

    const safe = catchError((e) => seq([3, 4, e.message], 50));

    return expect(safe(withError)).toSubscribe(({ next, complete }) => [
      next(1),
      next(2),
      next(3),
      next(4),
      next('oops!'),
      complete(),
    ]);
  });
});
