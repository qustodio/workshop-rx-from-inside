import Subject from '../core/Subject';

export const share = () => (/*observable*/) => {
  const subject = new Subject();
  return subject;
};
