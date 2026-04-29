import { describe, expect, it } from 'vitest'

import { isEmptyObject } from './is-empty-object.js'

describe('is empty object', () => {
  it('should return true for empty objects', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject(Object.create(null))).toBe(true)
  })

  it('should return false for non-empty objects', () => {
    expect(
      isEmptyObject({
        a: 1,
      }),
    ).toBe(false)
  })

  it('should return false for non-object values', () => {
    expect(isEmptyObject([])).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject('hello')).toBe(false)
    expect(isEmptyObject(42)).toBe(false)
  })
})
