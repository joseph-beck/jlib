/**
 * isNumber checks if the provided value is a number.
 *
 * @param v value to check.
 * @returns {v is number} returns true if v is a number or otherwise false.
 *
 * @example
 * ```ts
 * isNumber(123) // true
 * isNumber('hello') // false
 * isNumber({}) // false
 * ```
 */
const isNumber = (v: unknown): v is number => typeof v === 'number'

export { isNumber }
