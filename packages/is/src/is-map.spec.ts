import { describe, expect, it } from 'vitest'

import { isMap } from './is-map.js'

describe('is map', () => {
  it('should return true for maps', () => {
    expect(isMap(new Map())).toBe(true)
  })

  it('should return false for non-maps', () => {
    expect(isMap(123)).toBe(false)
    expect(isMap({})).toBe(false)
    expect(isMap([])).toBe(false)
    expect(isMap(null)).toBe(false)
    expect(isMap(undefined)).toBe(false)
  })
})
