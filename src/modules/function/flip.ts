export function flip(fn: Function) {
  function reversed(this: unknown, ...args: unknown[]) {
    return fn.apply(this, args.reverse());
  }

  Object.defineProperty(reversed, 'length', {
    value: fn.length,
  });

  return reversed;
}
