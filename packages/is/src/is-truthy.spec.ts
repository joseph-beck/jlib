import { describe, expect, it } from 'vitest'

import { isTruthy } from './is-truthy.js'

describe('is truthy', () => {
  it('should return true for truthy values', () => {
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy(1)).toBe(true)
    expect(isTruthy('hello')).toBe(true)
    expect(isTruthy([])).toBe(true)
    expect(isTruthy({})).toBe(true)
  })

  it('should return false for non-truthy values', () => {
    expect(isTruthy(false)).toBe(false)
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy(0n)).toBe(false)
    expect(isTruthy('')).toBe(false)
    expect(isTruthy(null)).toBe(false)
    expect(isTruthy(undefined)).toBe(false)
  })
})
