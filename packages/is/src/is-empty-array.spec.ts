import { describe, expect, it } from 'vitest'

import { isEmptyArray } from './is-empty-array.js'

describe('is empty array', () => {
  it('should return true for empty arrays', () => {
    expect(isEmptyArray([])).toBe(true)
  })

  it('should return false for non-empty arrays', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false)
  })

  it('should return false for non-arrays', () => {
    expect(isEmptyArray('hello')).toBe(false)
    expect(isEmptyArray({})).toBe(false)
    expect(isEmptyArray(123)).toBe(false)
    expect(isEmptyArray(null)).toBe(false)
    expect(isEmptyArray(undefined)).toBe(false)
  })
})
