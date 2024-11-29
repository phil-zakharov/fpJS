import { GeneratorArgument } from '../../../types'

export async function* concat(...generators: GeneratorArgument[]) {
  for (const generator of generators) {
    for await (const chunk of generator) {
      yield chunk
    }
  }
}
