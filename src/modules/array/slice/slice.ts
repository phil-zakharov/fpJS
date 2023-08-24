export function* slice(
  g: Generator<unknown, void, unknown>,
  startIndex: number = 0,
  endIndex: number = Number.MAX_SAFE_INTEGER,
) {
  endIndex = endIndex - startIndex

  const iter = g[Symbol.iterator]();

  let iterRes = iter.next();

  while (startIndex > 0) {
    iterRes = iter.next();
    startIndex--;
  }


  while (endIndex > startIndex && !iterRes.done) {
    yield iterRes.value;
    iterRes = iter.next();
    endIndex--;
  }
}
