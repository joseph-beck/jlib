import { describe, expect, it } from 'vitest'

import { isNumber } from './is-number.js'

describe('is number', () => {
  it('should return true for numbers', () => {
    expect(isNumber(123)).toBe(true)
  })

  it('should return false for non-numbers', () => {
    expect(isNumber('hello')).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
  })
})
