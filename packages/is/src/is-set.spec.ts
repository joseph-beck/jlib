import { describe, expect, it } from 'vitest'

import { isSet } from './is-set.js'

describe('is set', () => {
  it('should return true for sets', () => {
    expect(isSet(new Set())).toBe(true)
  })

  it('should return false for non-sets', () => {
    expect(isSet(123)).toBe(false)
    expect(isSet({})).toBe(false)
    expect(isSet([])).toBe(false)
    expect(isSet(null)).toBe(false)
    expect(isSet(undefined)).toBe(false)
  })
})
