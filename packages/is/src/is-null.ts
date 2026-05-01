/**
 * isNull checks if a value is null.
 *
 * @param v value to check.
 * @returns {v is null} returns true if v is null or otherwise false.
 *
 * @example
 * ```ts
 * isNull(null) // true
 * isNull('hello') // false
 * isNull(123) // false
 * isNull({}) // false
 * isNull([]) // false
 * ```
 */
const isNull = (v: unknown): v is null => v === null

export { isNull }
