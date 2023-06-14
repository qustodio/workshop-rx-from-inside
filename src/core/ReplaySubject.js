import Observer from './Observer';
import Subscription from './Subscription';

class ReplaySubject {
  constructor(bufferSize = 0) {
    this._observers = [];
    this._buffer = [];
    this._bufferSize = bufferSize;
  }

  next(data) {
    this._observers.forEach((observer) => observer.next(data));
    this._buffer.push(data);

    if (this._bufferSize > 0 && this._buffer.length > this._bufferSize) {
      this._buffer.shift();
    }
  }

  error(e) {
    this._observers.forEach((observer) => observer.error(e));
  }

  complete() {
    this._observers.forEach((observer) => observer.complete());
  }

  _remove(observer) {
    this._observers = this._observers.filter(
      (otherObserver) => otherObserver !== observer
    );
  }

  subscribe(next, error, complete) {
    const observer = new Observer(next, error, complete);
    this._buffer.forEach((data) => observer.next(data));
    this._observers.push(observer);
    return new Subscription(() => this._remove(observer));
  }
}

export default ReplaySubject;
