import { at } from './modules/array/at/at';
import { concat } from './modules/array/concat';
import { create } from './modules/array/create';
import { enumerate } from './modules/array/enumerate';
import { filter } from './modules/array/filter';
import { map } from './modules/array/map';
import { reduce } from './modules/array/reduce';
import { slice } from './modules/array/slice';
import { take } from './modules/array/take';
import { zip } from './modules/array/zip';
import { thread } from './modules/async/thread';
import { carry } from './modules/function/carry';
import { flip } from './modules/function/flip';
import { partial } from './modules/function/partial';
import { pipeFromRight } from './modules/function/pipeFromRight';
import { immutObject } from './modules/immutable/immutObject';
import { even } from './modules/number/even';
import { sum } from './modules/number/sum';

// const objA = immutObject({ a: 2, c: 3 })
// console.log(objA.get())
// const objB = objA.set({ a: 5})
// console.log(objA.get())
// console.log(objB.get())

// const sum_ = (a: number, b: number, c: number) => +a + +b + +c;

// console.log(sum_(1, 2, 3));
// console.log('1', carry(sum_)(1));
// console.log('2', carry(sum_)(1)(2));
// console.log('3', carry(sum_)(1)(2)(3));
// console.log('4', carry(sum_)(1, 2)(3));
// console.log('5', carry(sum_)(1, 2, 3));

const iter = create(5, 10)

const a = at([1,2,3,4,5,6], 3)
const b = at('sdfsdf', 3)
const c = at(iter, 3)

for (const iterator of a) {
  console.log('a', iterator)
}

for (const iterator of b) {
  console.log('b', iterator)
}

for (const iterator of c) {
  console.log('c', iterator)
}

const obj = {
  [Symbol.iterator]() {
    return this
  },
  next() {
    return {
      value: 1,
      done: true
    }
  }
}

const d = at(obj, 3)