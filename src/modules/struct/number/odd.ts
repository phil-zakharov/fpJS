import { GeneratorArgument } from '../../types'

export async function* odd(gen: GeneratorArgument) {
  for await (const chunk of gen) {
    yield chunk
  }
}
