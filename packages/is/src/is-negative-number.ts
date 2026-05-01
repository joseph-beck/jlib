/**
 * isNegativeNumber checks if a value is a negative number.
 * Note that zero is not considered a negative number.
 *
 * @param v value to check.
 * @returns {v is number} returns true if v is a negative number or otherwise false.
 *
 * @example
 * ```ts
 * isNegativeNumber(-5) // true
 * isNegativeNumber(5) // false
 * isNegativeNumber(0) // false
 * isNegativeNumber('hello') // false
 * ```
 */
const isNegativeNumber = (v: unknown): v is number => {
  return typeof v === 'number' && v < 0
}

export { isNegativeNumber }
