export function multi(...values: number[]) {
  return values.reduce((acc, v) => acc * v, 1)
}