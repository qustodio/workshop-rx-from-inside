import { noop } from './helpers';
class Subscription {
  constructor(unsubscribe = noop) {
    this._unsubscribe = unsubscribe;
  }

  unsubscribe() {
    this._unsubscribe();
  }
}

export default Subscription;
