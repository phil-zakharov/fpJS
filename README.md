## [Array](/src/modules/array/README.md)

function like native array methods in JS, for lazy evaluation, based on iterators

## [Functions](src/modules/function/README.md)

helpers for change simple function to FP style functions

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
