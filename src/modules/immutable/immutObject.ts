export function immutObject(obj: object) {
  return {
    get() {
      return obj
    },
    set(arg: object) {
      return immutObject({ ...obj, ...arg })
    }
  }
}
