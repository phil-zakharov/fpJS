import { create } from './modules/array/create';
import { filter } from './modules/array/filter';
import { map } from './modules/array/map';
import { reduce } from './modules/array/reduce';
import { take } from './modules/array/take';
import { even } from './modules/number/even';
import { sum } from './modules/number/sum';

const array = map(
  reduce(take(filter(create(5), even), 5), sum, 0),
  (v): unknown => ({
    value: (v as number) * 2,
    done: true,
  }),
);

// const array = take(create(1), 10)
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())
// console.log(array.next())

for (const el of array) {
  console.log(el);
}
