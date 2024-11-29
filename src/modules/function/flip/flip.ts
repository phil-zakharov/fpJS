export function flip<Func extends (...args: unknown[]) => void>(fn: Func) {
  function reversed(...args: unknown[]) {
    return fn(...args.reverse())
  }

  Object.defineProperty(reversed, 'length', {
    value: fn.length
  })

  return reversed
}
