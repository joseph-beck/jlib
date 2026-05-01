import { type Falsy } from './is-falsy.js'

/**
 * isTruthy checks if a value is truthy. A value is considered truthy if it is not falsy.
 * Falsy values are false, 0, 0n, '', null, and undefined.
 * Useful for type narrowing in conditional statements.
 * See isFalsy for the opposite of isTruthy.
 *
 * @param v value to check.
 * @returns {v is Exclude<T, Falsy>} returns true if v is truthy or otherwise false.
 *
 * @example
 * ```ts
 * isTruthy(true) // true
 * isTruthy(1) // true
 * isTruthy('hello') // true
 * isTruthy([]) // true
 * isTruthy({}) // true
 * isTruthy(false) // false
 * isTruthy(0) // false
 * isTruthy(0n) // false
 * isTruthy('') // false
 * isTruthy(null) // false
 * isTruthy(undefined) // false
 * ```
 */
const isTruthy = <T>(v: T): v is Exclude<T, Falsy> => !!v

export { isTruthy }
