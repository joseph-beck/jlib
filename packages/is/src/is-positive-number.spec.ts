import { describe, expect, it } from 'vitest'

import { isPositiveNumber } from './is-positive-number.js'

describe('is positive number', () => {
  it('should return true for positive numbers', () => {
    expect(isPositiveNumber(5)).toBe(true)
  })

  it('should return false for non-positive numbers', () => {
    expect(isPositiveNumber(-5)).toBe(false)
    expect(isPositiveNumber(0)).toBe(false)
    expect(isPositiveNumber('hello')).toBe(false)
  })
})
