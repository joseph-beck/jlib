/**
 * isArray checks if the provided value is an array.
 *
 * @param v value to check.
 * @returns {v is unknown[]} returns true if the value is an array or otherwise false.
 *
 * @example
 * ```ts
 * isArray([]) // true
 * isArray([1, 2, 3]) // true
 * isArray('hello') // false
 * isArray({}) // false
 * isArray(123) // false
 * isArray(undefined) // false
 * ```
 */
const isArray = (v: unknown): v is unknown[] => Array.isArray(v)

export { isArray }
