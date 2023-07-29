export function* reduce(
  g: Generator<unknown, void, unknown>,
  callback: (previousValue: unknown, currentValue: unknown) => unknown,
  initValue: unknown,
) {
  const iter = g[Symbol.iterator]();

  let result = initValue;

  for (const el of iter) {
    result = callback(result, el);
  }

  yield result;
  return;
}
