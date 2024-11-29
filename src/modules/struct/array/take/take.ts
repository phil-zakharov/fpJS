import { GeneratorArgument } from '../../../types'

export async function* take(g: GeneratorArgument, count: number) {
  for await (const chunk of g) {
    if (count-- === 0) {
      return
    }

    yield chunk
  }
}
