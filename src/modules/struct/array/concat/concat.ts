type Arg = Generator | AsyncGenerator

export async function* concat(...g: Arg[]) {
  for (let i = 0; i < g.length; i++) {
    yield* g[i]
  }
}