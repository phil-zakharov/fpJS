## at()

```js
const result = at([1, 2, 3, 4, 5], 3);

for (const el of result) {
  console.log(el); // 4
}
```

## concat()

```js
const result = concat([1, 2, 3], '456');

for (const el of result) {
  console.log(el); // 1 2 3 4 5 6
}
```

## create()

```js
const result = create(1, 5);

for (const el of result) {
  console.log(el); // 1 2 3 4
}
```

## enumerate()

```js
const result = enumerate('abc');

for (const el of result) {
  console.log(el); // [0, a] [1, b] [2, c]
}
```

## filter()

```js
const result = create(1, 5);

for (const el of result) {
  console.log(el); // 1 2 3 4
}
```

## map()

```js
const result = map([1,2,3,4,5], (v) => v * 2);

for (const el of result) {
  console.log(el); // 2, 4, 6, 8, 10
}
```

## reduce()

```js
const result = reduce([1,2,3,4,5], (acc, v) => acc + v);

for (const el of result) {
  console.log(el); // 15
}
```

## slice()

```js
const result = slice([1,2,3,4,5], 1, 3);

for (const el of result) {
  console.log(el); // 2, 3
}
```

## take()

```js
const result = take([1,2,3,4,5], 3);

for (const el of result) {
  console.log(el); // 1, 2, 3
}
```

## zip()

```js
const result = take([1,2,3,4,5], 'abcde');

for (const el of result) {
  console.log(el); // [1,a] [2,b] [3,c] [4,d] [5,e]
}
```