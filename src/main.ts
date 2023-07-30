import { at } from './modules/array/at';
import { concat } from './modules/array/concat';
import { create } from './modules/array/create';
import { enumerate } from './modules/array/enumerate';
import { filter } from './modules/array/filter';
import { map } from './modules/array/map';
import { reduce } from './modules/array/reduce';
import { take } from './modules/array/take';
import { even } from './modules/number/even';
import { sum } from './modules/number/sum';

// const array = at(concat(take(create(15), 5), take(create(30), 5)), 3)

const array = enumerate(take(create(5), 10))


for (const el of array) {
  console.log(el);
}
