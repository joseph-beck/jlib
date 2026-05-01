import { describe, expect, it } from 'vitest'

import { isFalsy } from './is-falsy.js'

describe('is falsy', () => {
  it('should return true for falsy values', () => {
    expect(isFalsy(false)).toBe(true)
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy(0n)).toBe(true)
    expect(isFalsy('')).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(undefined)).toBe(true)
  })

  it('should return false for non-falsy values', () => {
    expect(isFalsy(true)).toBe(false)
    expect(isFalsy(1)).toBe(false)
    expect(isFalsy('hello')).toBe(false)
    expect(isFalsy([])).toBe(false)
    expect(isFalsy({})).toBe(false)
  })
})
