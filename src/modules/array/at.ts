export function* at(g: Generator<number, void, unknown>, findIndex: number) {
  const iter = g[Symbol.iterator]();

  let index = 0;
  for (const el of iter) {
    if (index === findIndex) {
      yield el
      break
    }
    index++
  }
  return
}