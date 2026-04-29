import { describe, expect, it } from 'vitest'

import { isObject } from './is-object.js'

describe('is object', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
  })

  it('should return false for non-objects', () => {
    expect(isObject('hello')).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})
