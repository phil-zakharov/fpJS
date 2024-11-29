import { sleep } from './sleep';

export async function* thread(callback: Function, delay: number) {
  while (true) {
    try {
      await sleep(delay);
      yield callback();
    } catch (error) {
      return;
    }
  }
}
