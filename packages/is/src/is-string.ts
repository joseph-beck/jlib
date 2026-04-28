/**
 * Checks if a value is a string.
 *
 * @param v value to check
 * @returns boolean indicating if the value is a string
 */
const isString = (v: unknown): v is string => typeof v === 'string'

export { isString }
