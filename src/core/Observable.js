import Observer from './Observer';
import Pipeable from './Pipeable';
import Subscription from './Subscription';
import { noop } from './helpers';

class Observable extends Pipeable {
  constructor(subscribe) {
    super();
    this._subscribe = subscribe;
  }

  subscribe(next = noop, error = noop, complete = noop) {
    const observer = new Observer(next, error, complete);
    try {
      const cancel = this._subscribe(observer);
      return new Subscription(cancel);
    } catch (e) {
      observer.error(e);
      return new Subscription(() => {});
    }
  }
}

export default Observable;
