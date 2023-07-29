import { isNumber } from './isNumber';

export function even(value: unknown) {
  if (isNumber(value)) {
    return (value as number) % 2 === 0;
  }
  return false;
}
