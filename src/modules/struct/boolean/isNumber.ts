import { GeneratorArgument } from '../../types'

export async function* isNumber(generator: GeneratorArgument) {
  for await (const value of generator) {
    if (typeof value === 'number') yield true
    if (typeof value === 'string') {
      yield /^\d+$/.test(value)
    }
    yield false
  }
}
