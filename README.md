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

demo -> /src/async/threadDemo.html

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
