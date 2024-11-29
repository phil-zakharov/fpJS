export async function* random() {
  while (1) {
    yield Math.random()
  }
}
