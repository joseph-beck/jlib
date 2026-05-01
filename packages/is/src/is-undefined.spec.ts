import { describe, expect, it } from 'vitest'

import { isUndefined } from './is-undefined.js'

describe('is undefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('should return true for a type that could be undefined and is undefined', () => {
    const v: string | undefined = undefined

    expect(isUndefined(v)).toBe(true)
  })

  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('hello')).toBe(false)
    expect(isUndefined(123)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined([])).toBe(false)
  })

  it('should return false for a type that could be undefined and is not undefined', () => {
    const v: string | undefined = 'hello'

    expect(isUndefined(v)).toBe(false)
  })
})
