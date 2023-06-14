import Observer from './Observer';
import subscription from './Subscription';

class Subject {
  constructor() {
    this._observers = [];
  }

  _remove(observer) {
    this._observers = this._observers.filter(
      (otherObserver) => otherObserver !== observer
    );
  }

  next(data) {
    this._observers.forEach((observer) => observer.next(data));
  }

  error(e) {
    this._observers.forEach((observer) => observer.error(e));
  }

  complete() {
    this._observers.forEach((observer) => observer.complete());
  }

  subscribe(next, error, complete) {
    const observer = new Observer(next, error, complete);
    this._observers.push(observer);
    return new subscription(() => this._remove(observer));
  }
}

export default Subject;
