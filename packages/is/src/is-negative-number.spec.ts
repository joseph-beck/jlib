import { describe, expect, it } from 'vitest'

import { isNegativeNumber } from './is-negative-number.js'

describe('is negative number', () => {
  it('should return true for negative numbers', () => {
    expect(isNegativeNumber(-5)).toBe(true)
  })

  it('should return false for non-negative numbers', () => {
    expect(isNegativeNumber(5)).toBe(false)
    expect(isNegativeNumber(0)).toBe(false)
    expect(isNegativeNumber('hello')).toBe(false)
  })
})
