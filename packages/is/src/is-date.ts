/**
 * isDate checks if the value is an instance of Date and is a valid date.
 *
 * @param v value to check.
 * @returns {v instanceof Date} returns true if the value is an instance of Date and is a valid date or otherwise false.
 *
 * @example
 * ```ts
 * isDate(new Date()) // true
 * isDate(new Date('invalid date')) // false
 * isDate('2022-01-01') // false
 * isDate(1640995200000) // false
 * isDate(null) // false
 * isDate(undefined) // false
 * ```
 */
const isDate = (v: unknown): v is Date => v instanceof Date && !isNaN(v.getTime())

export { isDate }
