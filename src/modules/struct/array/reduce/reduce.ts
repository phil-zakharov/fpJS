import { GeneratorArgument } from '../../../types'

export async function* reduce(
  g: GeneratorArgument,
  callback: (previousValue: unknown, currentValue: unknown) => unknown,
  initValue: unknown
) {
  let result = initValue

  for await (const el of g) {
    result = callback(result, el)
  }

  yield result
}
