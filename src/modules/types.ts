export type GeneratorArgument<
  T = unknown,
  TReturn = unknown,
  TNext = unknown
> = Generator<T, TReturn, TNext> | AsyncGenerator<T, TReturn, TNext>
