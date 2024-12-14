export async function* wait(delay: number) {
  while (1) {
    await new Promise(resolve => setTimeout(resolve, delay))
    yield
  }
}
