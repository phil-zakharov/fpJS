import { GeneratorArgument } from '../../../types'

export async function* enumerate(g: GeneratorArgument, startIndex = 0) {
  for await (const el of g) {
    yield [startIndex++, el]
  }
}
