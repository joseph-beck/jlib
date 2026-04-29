/**
 * hasProperty, check if the given value has the given key.
 *
 * @param v value to check for property
 * @param k key to check for in value
 * @returns true if value has key as own property, false otherwise
 */
const hasProperty = (v: unknown, k: PropertyKey): boolean =>
  typeof v === 'object' && v !== null && v !== undefined && Object.hasOwn(v, k)

export { hasProperty }
