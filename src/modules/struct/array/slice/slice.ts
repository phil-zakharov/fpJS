import { GeneratorArgument } from '../../../types'

export async function* slice(
  g: GeneratorArgument,
  startIndex = 0,
  endIndex: number = Number.MAX_SAFE_INTEGER
) {
  while (startIndex > 1) {
    g.next()
    startIndex--
    endIndex--
  }
  for await (const chunk of g) {
    endIndex--

    if (endIndex <= 0) {
      return
    }
    yield chunk
  }
}
