import { EventEmitter } from 'events';
import { Observable } from './src';

const show = (tag) => (value) => console.log(tag, value);

// hot
const emitter = new EventEmitter();
let n = 0;
setInterval(() => emitter.emit('data', n++), 1000);

const hot = new Observable((observer) => {
  emitter.on('data', (n) => observer.next(n));
});

hot.subscribe(show('hot data:'), show('hot error:'), show('hot completed'));

// cold
const cold = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.complete();
});

cold.subscribe(show('cold data:'), show('cold error:'), show('cold completed'));
