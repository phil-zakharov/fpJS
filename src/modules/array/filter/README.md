## filter()

### Arguments

`first argument - generator`
`second argument - predicate function which return boolean`

### Returns 

`iterable object form start to end of infinity? with step 1`

### Examples

```js

  const result = create(1, 5)
  
  for(const el of result) {
    console.log(el)
  }
  
  // 1 2 3 4
```

[iterable](../../../docs/iterable.md)