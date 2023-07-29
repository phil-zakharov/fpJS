export function* map(
  g: Generator<unknown, void, unknown>,
  callback: (value: unknown) => unknown,
) {
  const iter = g[Symbol.iterator]();
  for (const el of iter) {
    yield callback(el);
  }

  return;
}
