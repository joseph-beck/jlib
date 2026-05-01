/**
 * isSymbol checks if a value is a symbol.
 *
 * @param v value to check.
 * @returns {v is symbol} returns true if v is a symbol or otherwise false.
 *
 * @example
 * ```ts
 * isSymbol(Symbol('foo')) // true
 * isSymbol('hello') // false
 * isSymbol(123) // false
 * isSymbol({}) // false
 * isSymbol([]) // false
 * ```
 */
const isSymbol = (v: unknown): v is symbol => typeof v === 'symbol'

export { isSymbol }
