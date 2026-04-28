/**
 * Checks if a value is a number.
 *
 * @param v value to check
 * @returns boolean indicating if the value is a number
 */
const isNumber = (v: unknown): v is number => typeof v === 'number'

export { isNumber }
