export function sum(...values: number[]): unknown {
  return values.reduce((acc, v) => acc + v, 0);
}
