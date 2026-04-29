/**
 * isNil checks if a value is null or undefined.
 *
 * @param v value to check.
 * @returns {v is null | undefined} returns true if the value is null or undefined or otherwise false.
 *
 * @example
 * ```ts
 * isNil(null) // true
 * isNil(undefined) // true
 * isNil(42) // false
 * isNil('hello') // false
 * isNil({}) // false
 * isNil([]) // false
 * ```
 */
const isNil = (v: unknown): v is null | undefined => v === null || v === undefined

export { isNil }
