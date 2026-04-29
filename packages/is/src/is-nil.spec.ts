import { describe, expect, it } from 'vitest'

import { isNil } from './is-nil.js'

describe('is nil', () => {
  it('should return true for null and undefined', () => {
    expect(isNil(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
  })

  it('should return false for non-nil values', () => {
    expect(isNil(42)).toBe(false)
    expect(isNil('hello')).toBe(false)
    expect(isNil({})).toBe(false)
    expect(isNil([])).toBe(false)
  })
})
