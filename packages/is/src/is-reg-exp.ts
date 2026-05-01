/**
 * isRegExp checks if a value is a regular expression.
 *
 * @param v value to check.
 * @returns {v is RegExp} returns true if v is a RegExp or otherwise false.
 *
 * @example
 * ```ts
 * isRegExp(/abc/) // true
 * isRegExp(new RegExp('abc')) // true
 * isRegExp('abc') // false
 * isRegExp(123) // false
 * isRegExp({}) // false
 * isRegExp([]) // false
 * isRegExp(null) // false
 * isRegExp(undefined) // false
 * ```
 */
const isRegExp = (v: unknown): v is RegExp => v instanceof RegExp

export { isRegExp }
