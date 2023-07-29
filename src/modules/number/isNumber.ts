export function isNumber(value: unknown): value is number {
  if (typeof value === 'number') return true;
  if (typeof value === 'string') {
    return /^\d+$/.test(value);
  }
  return false;
}
