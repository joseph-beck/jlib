import { describe, expect, it } from 'vitest'

import { isPrimitive } from './is-primitive.js'

describe('is primitive', () => {
  it('should return true for primitives', () => {
    expect(isPrimitive(42)).toBe(true)
    expect(isPrimitive('hello')).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
  })

  it('should return false for non-primitives', () => {
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive([])).toBe(false)
    expect(
      isPrimitive(() => {
        void 0
      }),
    ).toBe(false)
  })
})
