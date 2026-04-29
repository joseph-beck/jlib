import { isPlainObject } from './is-plain-object.js'

/**
 * isEmptyObject checks if a value is an empty object, that is,
 * a plain object with no own properties.
 *
 * @param v value to check.
 * @returns {v is Record<PropertyKey, never>} returns true if the value is an empty object or otherwise false.
 *
 * @example
 * ```ts
 * isEmptyObject({}) // true
 * isEmptyObject(Object.create(null)) // true
 * isEmptyObject({ a: 1 }) // false
 * isEmptyObject([]) // false
 * isEmptyObject(null) // false
 * isEmptyObject('hello') // false
 * isEmptyObject(42) // false
 * ```
 */
const isEmptyObject = (v: unknown): v is Record<PropertyKey, never> =>
  isPlainObject(v) && Reflect.ownKeys(v).length === 0

export { isEmptyObject }
