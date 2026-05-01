/**
 * isMap checks if a value is a Map.
 *
 * @param v value to check.
 * @returns {v is Map<unknown, unknown>} returns true if v is a Map or otherwise false.
 *
 * @example
 * ```ts
 * isMap(new Map()) // true
 * isMap(new Set()) // false
 * isMap([]) // false
 * isMap({}) // false
 * isMap('hello') // false
 * ```
 */
const isMap = (v: unknown): v is Map<unknown, unknown> => v instanceof Map

export { isMap }
