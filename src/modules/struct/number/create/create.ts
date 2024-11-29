export async function* create(from = 0, to?: number) {
  if (to || to === 0) {
    while (from < to) {
      yield from++
    }
  } else {
    while (true) {
      yield from++
    }
  }
}
