import { describe, expect, it } from 'vitest'

import { isDate } from './is-date.js'

describe('is date', () => {
  it('should return true for valid dates', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('should return false for invalid dates', () => {
    expect(isDate(new Date('invalid date'))).toBe(false)
  })

  it('should return false for non-date values', () => {
    expect(isDate('2022-01-01')).toBe(false)
    expect(isDate(1640995200000)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
  })
})
