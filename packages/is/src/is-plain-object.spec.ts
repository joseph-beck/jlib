import { describe, expect, it } from 'vitest'

import { isPlainObject } from './is-plain-object.js'

describe('is plain object', () => {
  it('should return true for plain objects', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)
  })

  it('should return false for non-plain objects', () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(null)).toBe(false)
    expect(isPlainObject(undefined)).toBe(false)
    expect(isPlainObject('hello')).toBe(false)
    expect(isPlainObject(42)).toBe(false)
  })
})
