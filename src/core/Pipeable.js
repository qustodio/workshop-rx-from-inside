const pipe = (f, g) => (x) => g(f(x));
const identity = (x) => x;
const pipeAll = (...fns) => fns.reduce(pipe, identity);

class Pipeable {
  pipe(...ops) {
    const f = pipeAll(...ops);
    return f(this);
  }
}

export default Pipeable;
