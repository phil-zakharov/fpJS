export function* concat(...g: Generator<number, void, unknown>[]) {
  for (let i = 0; i < g.length; i++) {
    yield* g[i]
  }
}