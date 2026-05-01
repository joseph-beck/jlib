/**
 * isSet checks if a value is a Set.
 *
 * @param v value to check.
 * @returns {v is Set<unknown>} returns true if v is a Set or otherwise false.
 *
 * @example
 * ```ts
 * isSet(new Set()) // true
 * isSet(new Map()) // false
 * isSet([]) // false
 * isSet({}) // false
 * isSet('hello') // false
 * ```
 */
const isSet = (v: unknown): v is Set<unknown> => v instanceof Set

export { isSet }
