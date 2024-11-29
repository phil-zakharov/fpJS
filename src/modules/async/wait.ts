import { sleep } from './sleep'

export async function* wait(ms: number) {
  while (1) {
    await sleep(ms)
    yield
  }
}
