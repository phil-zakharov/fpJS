export function* filter(
  g: Generator<number, void, unknown>,
  predicate: (v: unknown) => boolean,
) {
  const iter = g[Symbol.iterator]();

  for (const el of iter) {
    if (predicate(el)) {
      yield el;
    }
  }

  return;
}
