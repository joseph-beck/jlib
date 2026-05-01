/**
 * isUndefined checks if a value is undefined.
 *
 * @param v value to check.
 * @returns {v is undefined} returns true if v is undefined or otherwise false.
 *
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined('hello') // false
 * isUndefined(123) // false
 * isUndefined({}) // false
 * isUndefined([]) // false
 * ```
 */
const isUndefined = (v: unknown): v is undefined => typeof v === 'undefined'

export { isUndefined }
