import { describe, it, expect } from 'vitest'
import { shouldBeTrue } from './should-be-true'

describe('should be true', () => {
  it('should return true for true', () => {
    expect(shouldBeTrue(true)).toBe(true)
  })

  it('should return false for false', () => {
    expect(shouldBeTrue(false)).toBe(false)
  })

  it('should return false for non-true values', () => {
    expect(shouldBeTrue(123)).toBe(false)
    expect(shouldBeTrue('hello')).toBe(false)
    expect(shouldBeTrue({})).toBe(false)
    expect(shouldBeTrue([])).toBe(false)
    expect(shouldBeTrue(null)).toBe(false)
    expect(shouldBeTrue(undefined)).toBe(false)
  })
})
