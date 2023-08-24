export function carry(fn: Function) {
  function carried(this: unknown, ...args: unknown[]): any {
    if (args.length >= fn.length) {
      return fn.apply(this, args.slice(0, fn.length));
    }
    return carried.bind(this, ...args);
  }

  Object.defineProperty(carried, 'length', {
    value: fn.length,
  });

  return carried;
}
