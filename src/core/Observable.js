import Observer from './Observer';
import Subscription from './Subscription';
import { noop } from './helpers';

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(next = noop, error = noop, complete = noop) {
    const observer = new Observer(next, error, complete);
    const cancel = this._subscribe(observer);
    return new Subscription(cancel);
  }
}

export default Observable;
