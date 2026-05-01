import { describe, expect, it } from 'vitest'

import { isNull } from './is-null.js'

describe('is null', () => {
  it('should return true for null values', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return false for non-null values', () => {
    expect(isNull([])).toBe(false)
    expect(isNull('hello')).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull(123)).toBe(false)
    expect(isNull(undefined)).toBe(false)
  })
})
