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
    const cancel = this._subscribe(observer);
    return new Subscription(cancel);
  }
}

export default Observable;
