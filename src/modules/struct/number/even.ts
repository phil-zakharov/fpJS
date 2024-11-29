import { GeneratorArgument } from '../../types'

export async function* even(gen: GeneratorArgument) {
  for await (const chunk of gen) {
    yield chunk
  }
}
