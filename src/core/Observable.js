// import Observer from './Observer';
// import Subscription from './Subscription';
import { noop } from './helpers';

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(next = noop, error = noop, complete = noop) {
    return this._subscribe({ next, error, complete });
  }
}

export default Observable;
