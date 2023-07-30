import { at } from './modules/array/at';
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
import { even } from './modules/number/even';
import { sum } from './modules/number/sum';

async function main() {
  console.log('start');
  let count = 1;
  const a = thread(() => {
    console.log(count++);
    return 'return'
  }, 1000);

  for await (const el of a) {
    console.log(el)
    if (count === 10) {
      a.throw('bla bla')
    }
  }
  console.log('end');
}

main();

const b = create()