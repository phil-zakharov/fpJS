export async function* at<T = unknown>(g: Iterable<T>, findIndex: number) {
  let index = 0;

  for await (const el of g) {
    if (index === findIndex) {
      yield el;
      break;
    }
    index++;
  }
  
  return;
}
