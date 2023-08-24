## enumerate()

### Arguments

`generator`

### Returns 

`iterable object with [number, value]`

### Examples

```js

  const result = enumerate('abc')
  
  for(const el of result) {
    console.log(el)
  }
  
  // [0, a] [1, b] [2, c]
```

[iterable](../../../docs/iterable.md)