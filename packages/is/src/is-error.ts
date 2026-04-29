/**
 * isError checks if the value is an instance of Error.
 *
 * @param v value to check.
 * @returns {v is Error} returns true if the value is an instance of Error or otherwise false.
 *
 * @example
 * ```ts
 * isError(new Error()) // true
 * isError('hello') // false
 * isError({}) // false
 * isError(123) // false
 * isError(null) // false
 * ```
 */
const isError = (v: unknown): v is Error => v instanceof Error

export { isError }
