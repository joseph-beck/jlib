/**
 * isPlainObject checks if a value is a plain object, that is,
 * an object created by the Object constructor or with a null prototype.
 *
 * @param v value to check.
 * @returns {v is Record<PropertyKey, unknown>} returns true if the value is a plain object or otherwise false.
 *
 * @example
 * ```ts
 * isPlainObject({}) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject([]) // false
 * isPlainObject(null) // false
 * isPlainObject('hello') // false
 * isPlainObject(42) // false
 * ```
 */
const isPlainObject = (v: unknown): v is Record<PropertyKey, unknown> => {
  if (typeof v !== 'object' || v === null) {
    return false
  }

  const proto = Object.getPrototypeOf(v) as unknown

  return proto === Object.prototype || proto === null
}

export { isPlainObject }
