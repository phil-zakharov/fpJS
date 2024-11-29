import { wait } from './modules/async'
import { random } from './modules/struct/number'


async function main() {
  const waiter = wait(2000)
  for await (const random of [1,2,3]) {
    console.log(random)
    await waiter.next()
    
  }
  console.log(await random().next())
  console.log(await random().next())
}

void main()
