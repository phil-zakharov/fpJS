import { wait } from './modules/async'
import { curry } from './modules/function/carry/carry'
import { concat, enumerate, slice, take } from './modules/struct/array'
import { random } from './modules/struct/number'
import { create } from './modules/struct/number/create'
import { GeneratorArgument } from './modules/types'

// function* pipe(...generators: GeneratorArgument[]) {
//   for (const gen of generators) {
//     for await (const element of object) {

//     }
//   }
// }

// const piped = pipe(
//   create(1),
//   curry(take)(curry._, 5),
//   curry(slice)(curry._, 3, 5)
// )

async function main() {
  const waiter = wait(1000)

  for await (const chunk of enumerate(
    concat(slice(take(create(1), 5), 3, 5), slice(take(create(1), 15), 7, 10))
  )) {
    console.log(chunk)
    await waiter.next()
  }
}

void main()
