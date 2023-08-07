```js
const iterable = {
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
```