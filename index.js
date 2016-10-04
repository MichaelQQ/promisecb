module.exports.cbPromisify = (fn, ...args) => new Promise((resolve, reject) => {
  const callback = (error, ...result) => {
    if (error) { return reject(error); }
    return resolve(...result);
  };

  try {
    fn.apply(undefined, [...args, callback]);
  } catch (err) {
    fn.apply(undefined, [callback, ...args]);
  }
});
