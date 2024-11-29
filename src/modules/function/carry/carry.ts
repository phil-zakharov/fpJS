/* eslint-disable @typescript-eslint/no-explicit-any */
export function curry<Func extends (...args: any[]) => unknown>(fn: Func) {
  function carried(this: unknown, ...args: any[]): unknown {
    const filteredArgs = args.filter(a => a !== curry._)

    if (filteredArgs.length >= fn.length) {
      let resArgs: any[] = args.slice(0, fn.length)

      const otherArgs = args.slice(fn.length)

      resArgs = resArgs.map(arg => {
        if (arg === curry._) {
          return otherArgs.shift()
        }
        return arg
      })

      return fn.apply(this, resArgs)
    }

    return carried.bind(this, ...args)
  }

  Object.defineProperties(carried, {
    length: {
      value: fn.length
    }
  })

  return carried
}

curry._ = 'skip'
