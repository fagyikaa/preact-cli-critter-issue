export const throttle = (func, duration) => {
  let shouldWait = false

  return (...args) => {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false
      }, duration);
    }
  }
};

export const classNames = (...args) => {
  const classes = [];

  args.forEach((arg) => {
    if (arg) {
      const argType = typeof arg;
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (argType === 'object') {
        Object.keys(arg).forEach((key) => {
          if (arg[key]) {
            classes.push(key);
          }
        });
      }
    }
  });

  return classes.join(' ');
};

export const isItInViewPort = (reference) => (window.innerHeight || document.documentElement.clientHeight)
    > Math.abs(reference.getBoundingClientRect().y);
