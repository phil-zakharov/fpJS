import { at } from './at';

describe('Array at', () => {
  test('get element on index 2 from string', () => {
    const iter = at('abcd', 2);

    const el_one = iter.next();
    expect(el_one.value).toBe('c')
    expect(el_one.done).toBe(false)

    const el_two = iter.next();
    expect(el_two.value).toBe(undefined)
    expect(el_two.done).toBe(true)
  });
});
