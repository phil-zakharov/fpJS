export async function* create(
  from: number | string = 0,
  to: number | string = Infinity
): AsyncGenerator<unknown, unknown, unknown> {
  if (typeof from !== typeof to) {
    throw new TypeError('"from" type should equal "to" type')
  }

  if (typeof from === 'number' && typeof to === 'number') {
    while (from < to) {
      yield from++
    }
  }

  if (typeof from === 'string' && typeof to === 'string') {
    from = from.charCodeAt(0)
    to = to.charCodeAt(0)

    while (from < to) {
      yield String.fromCharCode(from)
      from++
    }
  }

  return
}
