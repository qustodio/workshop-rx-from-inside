export const noop = () => {};

export const isPromise = (x) => {
  return x !== null && typeof x === 'object' && typeof x.then === 'function';
};

export const isIterable = (x) => {
  return (
    x !== null &&
    typeof x === 'object' &&
    typeof x[Symbol.iterator] === 'function'
  );
};

export const isString = (x) => {
  return typeof x === 'string';
};
