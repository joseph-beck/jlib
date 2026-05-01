/**
 * isPromise checks if a value is a Promise.
 *
 * @param v value to check.
 * @returns {v is Promise<unknown>} returns true if v is a Promise or otherwise false.
 *
 * @example
 * ```ts
 * isPromise(Promise.resolve()) // true
 * isPromise(new Set()) // false
 * isPromise([]) // false
 * isPromise({}) // false
 * isPromise('hello') // false
 * ```
 */
const isPromise = (v: unknown): v is Promise<unknown> =>
  typeof v === 'object' &&
  v !== null &&
  typeof (v as Promise<unknown>).then === 'function' &&
  typeof (v as Promise<unknown>).catch === 'function'

export { isPromise }
