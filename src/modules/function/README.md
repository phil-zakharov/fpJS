## carry()

```js

function sum(a, b) {
  return a + b
}
const carriedSum = carry(sum);

const sumWithFive = carriedSum(5);

console.log(sumWithFive(7)) // 12
```

## flip()

```js

function div(a, b) {
  return a / b
}
const flippedDiv = flip(div);

console.log(flippedDiv(5, 15)) // 3
```

## memo()

```js

function heavyComputing(a, b, c) {
  // computing
  return 'result'
}
const memoized = memo(heavyComputing);

console.log(memoized(22, 33, 44)) // computing
console.log(memoized(22, 33, 44)) // memoized result from cache
console.log(memoized(22, 33, 44)) // memoized result from cache
```

## partial()

```js

function sum(a, b, c, d) {
  return a + b + c + d
}
const partialSum = partial(sum, 1, 2);


console.log(partialSum(3, 4)) // 10
```

## pipeFormLeft()

```js

function fn1(a) {
  return a + 1
}
function fn2(a) {
  return a * 3
}
function fn3(a) {
  return a  - 5
}
const piped = pipeFromLeft(fn1, fn2, fn3);


console.log(piped(2)) // 4
```

## pipeFormRight()

```js

function fn1(a) {
  return a + 1
}
function fn2(a) {
  return a * 3
}
function fn3(a) {
  return a  - 5
}
const piped = pipeFromRight(fn1, fn2, fn3);


console.log(piped(2)) // -8
```