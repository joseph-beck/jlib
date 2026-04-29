/**
 * isBoolean checks if a value is a boolean.
 *
 * @param v value to check.
 * @returns {v is boolean} returns true if the value is a boolean or otherwise false.
 *
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean('hello') // false
 * isBoolean(42) // false
 * isBoolean(null) // false
 * isBoolean(undefined) // false
 * ```
 */
const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean'

export { isBoolean }
