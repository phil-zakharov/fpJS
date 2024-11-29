import { GeneratorArgument } from '../../../types'

export async function* at(g: GeneratorArgument, findIndex: number) {
  for await (const el of g) {
    if (findIndex-- === 0) {
      yield el
    }
  }
}
