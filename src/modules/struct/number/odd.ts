import { isNumber } from '../boolean/isNumber';

export function odd(value: unknown) {
  if (isNumber(value)) {
    return (value as number) % 2 !== 0;
  }
  return false;
}
