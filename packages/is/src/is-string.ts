/**
 * isString checks if the provided value is a string.
 *
 * @param v value to check.
 * @returns {v is string} returns true if v is a string or otherwise false.
 *
 * @example
 * ```ts
 * isString('hello') // true
 * isString(123) // false
 * isString({}) // false
 * ```
 */
const isString = (v: unknown): v is string => typeof v === 'string'

export { isString }
