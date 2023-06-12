import { noop } from './helpers';

class Observer {
  constructor(next = noop, error = noop, complete = noop) {
    this._next = next;
    this._error = error;
    this._complete = complete;
    this._isCompleted = false;
  }

  next(data) {
    try {
      if (!this._isCompleted) {
        this._next(data);
      }
    } catch (e) {
      this.error(e);
    }
  }

  error(e) {
    if (!this._isCompleted) {
      this._error(e);
      this._isCompleted = true;
    }
  }

  complete() {
    if (!this._isCompleted) {
      this._complete();
      this._isCompleted = true;
    }
  }
}

export default Observer;
