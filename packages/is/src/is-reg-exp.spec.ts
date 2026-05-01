import { describe, expect, it } from 'vitest'

import { isRegExp } from './is-reg-exp.js'

describe('is reg exp', () => {
  it('should return true for regexp values', () => {
    expect(isRegExp(/abc/)).toBe(true)
    expect(isRegExp(new RegExp('abc'))).toBe(true)
  })

  it('should return false for non-regexp values', () => {
    expect(isRegExp('abc')).toBe(false)
    expect(isRegExp(123)).toBe(false)
    expect(isRegExp({})).toBe(false)
    expect(isRegExp([])).toBe(false)
    expect(isRegExp(null)).toBe(false)
    expect(isRegExp(undefined)).toBe(false)
  })
})
