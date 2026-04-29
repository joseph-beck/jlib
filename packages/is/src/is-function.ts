/**
 * isFunction checks if the provided value is a function.
 *
 * @param v value to check.
 * @returns {v is (...args: unknown[]) => unknown} returns true if v is a function or otherwise false.
 *
 * @example
 * ```ts
 * isFunction(() => {}) // true
 * isFunction(function() {}) // true
 * isFunction(async function() {}) // true
 * isFunction('hello') // false
 * isFunction({}) // false
 * ```
 */
const isFunction = (v: unknown): v is (...args: unknown[]) => unknown => typeof v === 'function'

export { isFunction }
