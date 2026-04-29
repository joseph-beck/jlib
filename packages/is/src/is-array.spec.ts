import { describe, expect, it } from 'vitest'

import { isArray } from './is-array.js'

describe('is array', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('should return false for non-arrays', () => {
    expect(isArray('hello')).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(123)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})
