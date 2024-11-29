export function partial(this: unknown, fn: Function, ...args: unknown[]): any {
  if (args.length >= fn.length) {
    return fn.apply(null, args.slice(0, fn.length))
  }
  return partial.bind(this, fn, ...args)
}
