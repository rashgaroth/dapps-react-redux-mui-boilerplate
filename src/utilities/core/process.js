export const waitFor = (condition, callback) => {
  if (!condition()) {
    setTimeout(waitFor.bind(null, condition, callback), 100); /* this checks the flag every 100 milliseconds */
  } else {
    callback();
  }
};

export const wait = seconds =>
  new Promise(resolve => {
    const secs = Math.floor((seconds / 1000) % 60);
    setTimeout(() => {
      resolve();
    }, secs);
  });
