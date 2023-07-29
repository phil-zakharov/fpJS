export function* take(g: Generator<number, void, unknown>, count: number) {
  const iter = g[Symbol.iterator]();
  for (const el of iter) {
    if (count > 0) {
      count--;
      yield el;
    } else {
      return;
    }
  }
}
