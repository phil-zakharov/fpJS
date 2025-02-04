## [Functions](src/modules/function/README.md)

 - helpers for change simple function to FP style functions

## Thread

 - function for create non-blocked threads

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
