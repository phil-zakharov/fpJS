export function* zip(...gens: Generator<unknown, void, unknown>[]) {
  const iters = gens.map((gen) => gen[Symbol.iterator]());

  let done = false;

  while (!done) {
    const tuple: unknown[] = [];

    iters.forEach((iter) => {
      const iterRes = iter.next();
      if (iterRes.done) {
        done = true;
      } else {
        tuple.push(iterRes.value);
      }
    });

    if (!done) {
      yield tuple;
    }
  }
}
