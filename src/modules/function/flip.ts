export function flip(fn: Function) {
  function reversed(...args: unknown[]) {
    return fn(...args.reverse())
  }

  Object.defineProperty(reversed, 'length', {
    value: fn.length,
  });

  return reversed;
}
