### Async

#### sleep
```
await sleep(1000) -> sleep 1 second
```
Array
  1. [at](/src/modules/array/at/README.md)
  2. [concat](/src/modules/array/concat/README.md)
  3. [create](/src/modules/array/create/README.md)
  4. [enumerate](/src/modules/array/enumerate/README.md)
  5. [filter](/src/modules/array/filter/README.md)
  6. [map](/src/modules/array/map/README.md)
  7. [reduce](/src/modules/array/reduce/README.md)
  8. [slice](/src/modules/array/slice/README.md)
  9. [take](/src/modules/array/take/README.md)
  10. [zip](/src/modules/array/zip/README.md)
#### thread
demo ->  /src/async/threadDemo.html
```js
async function createThread(element, delay) {

  let count = 1;

  const a = thread(() => {
    element.textContent = count++;
  }, delay);

  for await (const el of a) {
    if (count === 1000) {
      a.throw('stop');
    }
  }

}
```

### Array

```
const generator = function()

for( const el of generator) {

}
```

#### create
```
const generator = create(10, 55) 
```

#### at
```

```

#### concat
```
const allGenerator = concat(generator1, generator2)
```

#### concat
```
const allGenerator = concat(generator1, generator2)
```

#### enumerate
```
const allGenerator = enumerate(generator) -> [index, value]
```

#### filter
```
const generator = filter(generator, (v) => v > 10)
```

#### map
```
const generator = map(generator, (v) => v * 2)
```

#### reduce
```
const generator = reduce(generator, (acc, v) => acc + v, 0)
```

#### slice
```
const generator = slice(generator, 5, 10)
```

#### take
```
const generator = take(generator, 5)
```

#### zip
```
const generator = zip(generator1, generator2...) -> [iter1, iter2...]
```

### Function

#### carry
```
const sum = (a, b) = return a + b

const carrySum = carry(sum)

const sumWith5 = carrySum(5)

sumWith5(10) -> 15
```

#### flip
```
const divide = (numerator, denominator) = numerator / denominator

const flipDivide = flip(divide)

flipDivide(5, 10) -> 2
```