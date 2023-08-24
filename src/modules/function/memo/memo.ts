export function memo(fn: Function, cache = new Map()) {
  return function (arg: unknown) {
    if (!cache.has(arg)) {
      cache.set(arg, fn(arg));
    }

    return cache.get(arg);
  };
}
