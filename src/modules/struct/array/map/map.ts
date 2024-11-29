import { GeneratorArgument } from '../../../types'

export async function* map(
  g: GeneratorArgument,
  callback: (value: unknown) => unknown
) {
  for await (const el of g) {
    yield callback(el)
  }
}
