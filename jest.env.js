const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

expect.extend({
  toSubscribe: async (observable, expected, config = {}) => {
    const options = Object.assign(
      {},
      { cancelAfter: Infinity, subscribeAfter: 0 },
      config
    );

    const next = (value) => ({ type: 'next', value });

    const error = (e) => ({
      type: 'error',
      value: e,
    });

    const complete = () => ({ type: 'complete' });

    const cancel = () => ({ type: 'cancel' });

    const emissions = [];

    const next_ = jest.fn().mockImplementation((value) => {
      emissions.push(next(value));
    });
    const error_ = jest.fn().mockImplementation((e) => {
      emissions.push(error(e));
    });

    const complete_ = jest.fn().mockImplementation(() => {
      emissions.push(complete());
    });

    const cancel_ = jest.fn().mockImplementation(() => {
      emissions.push(cancel());
    });

    const handleExpect = () => {
      try {
        expect(emissions).toEqual(expected({ next, error, complete, cancel }));
        return { pass: true, message: () => '' };
      } catch (e) {
        return {
          pass: false,
          message: () => e.message,
        };
      }
    };

    let taken = 0;

    await delay(options.subscribeAfter);

    return new Promise((resolve) => {
      let subscription = observable.subscribe(
        (x) => {
          if (taken < options.cancelAfter) {
            next_(x);
            taken++;
          } else {
            subscription.unsubscribe();
            cancel_();
            resolve();
          }
        },
        (e) => {
          error_(e);
          resolve();
        },
        () => {
          complete_();
          resolve();
        }
      );
    }).then(handleExpect);
  },
});
