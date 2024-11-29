import { GeneratorArgument } from '../../../types'

export async function* filter(
  g: GeneratorArgument,
  predicate: (v: unknown) => boolean
) {
  for await (const el of g) {
    if (predicate(el)) {
      yield el
    }
  }
}
