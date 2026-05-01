/**
 * isPositiveNumber checks if a value is a positive number.
 * Note that zero is not considered a positive number.
 *
 * @param value value to check.
 * @returns {value is number} returns true if value is a positive number or otherwise false.
 *
 * @example
 * ```ts
 * isPositiveNumber(5) // true
 * isPositiveNumber(-5) // false
 * isPositiveNumber(0) // false
 * isPositiveNumber('hello') // false
 * ```
 */
const isPositiveNumber = (value: unknown): value is number => {
  return typeof value === 'number' && value > 0
}

export { isPositiveNumber }
