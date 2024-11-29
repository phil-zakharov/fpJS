export function pipeFromRight(...functions: Function[]) {
  return function (arg: unknown) {
    return functions.reduceRight((acc, fn) => {
      return fn(acc)
    }, arg)
  }
}
