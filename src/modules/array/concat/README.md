## concat()

### Arguments

`same generators`

### Returns 

`iterable object with all iterators in a row`

### Examples

```js

  const result = concat([1,2,3], '456')
  
  for(const el of result) {
    console.log(el)
  }
  
  // 1 2 3 4 5 6 
```

[iterable](../../../docs/iterable.md)