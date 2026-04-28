import { describe, expect, it } from 'vitest'

import { isString } from './is-string.js'

describe('is string', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).toBe(true)
  })

  it('should return false for non-strings', () => {
    expect(isString(123)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })
})
