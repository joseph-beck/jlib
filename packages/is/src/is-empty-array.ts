/**
 * isEmptyArray checks if the value is an empty array.
 *
 * @param v value to check.
 * @returns {v is unknown[]} returns true if v is an empty array or otherwise false.
 *
 * @example
 * ```ts
 * isEmptyArray([]) // true
 * isEmptyArray([1, 2, 3]) // false
 * isEmptyArray('hello') // false
 * isEmptyArray({}) // false
 * ```
 */
const isEmptyArray = (v: unknown): v is unknown[] => Array.isArray(v) && v.length === 0

export { isEmptyArray }
