/**
 * isObject checks if the value is an object.
 *
 * @param v value to check.
 * @returns {v is object} returns true if the value is an object or otherwise false.
 *
 * @example
 * ```ts
 * isObject({}) // true
 * isObject([]) // true
 * isObject(null) // false
 * isObject('hello') // false
 * isObject(42) // false
 * ```
 */
const isObject = (v: unknown): v is object => typeof v === 'object' && v !== null

export { isObject }
