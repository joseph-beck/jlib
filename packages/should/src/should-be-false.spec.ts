import { describe, expect, it } from 'vitest'

import { shouldBeFalse } from './should-be-false.js'

describe('should be false', () => {
  it('should not throw for false', () => {
    expect(() => shouldBeFalse(false)).not.toThrow()
  })

  it('should throw for true', () => {
    expect(() => shouldBeFalse(true)).toThrow('should be false, but got true')
  })

  it('should throw for non-false values', () => {
    expect(() => shouldBeFalse(123)).toThrow('should be false, but got 123')
    expect(() => shouldBeFalse('hello')).toThrow('should be false, but got hello')
    expect(() => shouldBeFalse({})).toThrow('should be false, but got [object Object]')
    expect(() => shouldBeFalse([])).toThrow('should be false, but got ')
    expect(() => shouldBeFalse(null)).toThrow('should be false, but got null')
    expect(() => shouldBeFalse(undefined)).toThrow('should be false, but got undefined')
  })

  it('should use custom message if provided', () => {
    expect(() => shouldBeFalse(true, 'custom error message')).toThrow('custom error message')
  })
})
