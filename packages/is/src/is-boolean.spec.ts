import { describe, expect, it } from 'vitest'

import { isBoolean } from './is-boolean.js'

describe('is boolean', () => {
  it('should return true for booleans', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('should return false for non-booleans', () => {
    expect(isBoolean('hello')).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean(123)).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
  })
})
