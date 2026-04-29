/**
 * isNonEmptyArray checks if the provided value is an array and contains at least one element.
 *
 * @param v value to check.
 * @returns {v is unknown[]} returns true if v is a non-empty array or otherwise false.
 *
 * @example
 * ```ts
 * isNonEmptyArray([1, 2, 3]) // true
 * isNonEmptyArray([]) // false
 * isNonEmptyArray('hello') // false
 * isNonEmptyArray({}) // false
 * ```
 */
const isNonEmptyArray = (v: unknown): v is unknown[] => Array.isArray(v) && v.length > 0

export { isNonEmptyArray }
