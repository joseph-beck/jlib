import { describe, expect, it } from 'vitest'

import { isSymbol } from './is-symbol.js'

describe('is symbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true)
  })

  it('should return false for non-symbols', () => {
    expect(isSymbol(123)).toBe(false)
    expect(isSymbol('hello')).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol([])).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
  })
})
