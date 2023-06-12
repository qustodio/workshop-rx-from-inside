import ReplaySubject from '../core/ReplaySubject';

export const shareReplay = (bufferSize) => (/*observable*/) => {
  const subject = new ReplaySubject(bufferSize);
  return subject;
};
