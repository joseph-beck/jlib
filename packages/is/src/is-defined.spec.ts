import { describe, expect, it } from 'vitest'

import { isDefined } from './is-defined.js'

describe('is defined', () => {
  it('should return true for defined values', () => {
    expect(isDefined(42)).toBe(true)
    expect(isDefined('hello')).toBe(true)
  })

  it('should return false for null or undefined', () => {
    expect(isDefined(null)).toBe(false)
    expect(isDefined(undefined)).toBe(false)
  })
})
