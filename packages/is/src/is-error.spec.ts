import { describe, expect, it } from 'vitest'

import { isError } from './is-error.js'

describe('is error', () => {
  it('should return true for errors', () => {
    expect(isError(new Error())).toBe(true)
    expect(isError(new Error("error message"))).toBe(true)
  })

  it('should return false for non-errors', () => {
    expect(isError('hello')).toBe(false)
    expect(isError({})).toBe(false)
    expect(isError(123)).toBe(false)
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)
    expect(isError([])).toBe(false)
  })
})
