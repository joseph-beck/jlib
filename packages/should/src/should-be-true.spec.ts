import { describe, expect, it } from 'vitest'

import { shouldBeTrue } from './should-be-true.js'

describe('should be true', () => {
  it('should not throw for true', () => {
    expect(() => shouldBeTrue(true)).not.toThrow()
  })

  it('should throw for false', () => {
    expect(() => shouldBeTrue(false)).toThrow('should be true, but got false')
  })

  it('should throw for non-true values', () => {
    expect(() => shouldBeTrue(123)).toThrow('should be true, but got 123')
    expect(() => shouldBeTrue('hello')).toThrow('should be true, but got hello')
    expect(() => shouldBeTrue({})).toThrow('should be true, but got [object Object]')
    expect(() => shouldBeTrue([])).toThrow('should be true, but got ')
    expect(() => shouldBeTrue(null)).toThrow('should be true, but got null')
    expect(() => shouldBeTrue(undefined)).toThrow('should be true, but got undefined')
  })

  it('should use custom message if provided', () => {
    expect(() => shouldBeTrue(false, 'custom error message')).toThrow('custom error message')
  })
})
