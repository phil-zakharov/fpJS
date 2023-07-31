export function isNull(arg: unknown, strict: boolean = true) {
  if (strict) {
    return arg === null;
  }
  return arg == null;
}
