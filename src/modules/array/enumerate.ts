export function* enumerate(
  g: Generator<unknown, void, unknown>,
  startIndex: number = 0,
) {
  for (const el of g[Symbol.iterator]()) {
    yield [startIndex++, el];
  }
}
