import { GeneratorArgument } from '../../types'

export async function* isNull(generator: GeneratorArgument) {
  for await (const chunk of generator) {
    if (chunk == null) yield true
    yield false
  }
}
