export function carry(fn: Function) {
  function carried(this: unknown, ...args: unknown[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args.slice(0, fn.length));
    }
    return function (this: unknown, ...args2: unknown[]) {
      return carried(this, args.concat(args2));
    };
  }

  Object.defineProperty(carried, 'length', {
    value: fn.length,
  });

  return carried;
}
