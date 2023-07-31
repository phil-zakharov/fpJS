export function immutObject(obj: Object) {
  return {
    get() {
      return obj;
    },
    set(arg: Object) {
      return immutObject({ ...obj, ...arg });
    },
  };
}
