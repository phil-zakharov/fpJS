export async function* thread(callback: () => void, delay: number) {
  while (true) {
    try {
      await new Promise(resolve => setTimeout(resolve, delay))
      yield callback()
    } catch {
      return
    }
  }
}
