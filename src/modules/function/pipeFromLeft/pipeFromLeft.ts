export function pipeFromLeft(...functions: Function[]) {
  return function (arg: unknown) {
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, arg);
  };
}
