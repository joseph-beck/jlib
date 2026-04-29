import { describe, expect, it } from 'vitest'

import { hasProperty } from './has-property.js'

describe('has property', () => {
  it('should return true for existing properties', () => {
    expect(
      hasProperty(
        {
          foo: 'bar',
        },
        'foo',
      ),
    ).toBe(true)
  })

  it('should return false for non-existing properties', () => {
    expect(
      hasProperty(
        {
          foo: 'bar',
        },
        'bar',
      ),
    ).toBe(false)
  })

  it('should return true for existing indexes', () => {
    expect(hasProperty([1, 2, 3], 2)).toBe(true)
  })

  it('should return false for non-existing indexes', () => {
    expect(hasProperty([1, 2, 3], 4)).toBe(false)
  })

  it('should return true for existing symbols', () => {
    const sym = Symbol('test')
    const obj = {
      [sym]: 'value',
    }

    expect(hasProperty(obj, sym)).toBe(true)
  })

  it('should return false for non-existing symbols', () => {
    const sym = Symbol('test')
    const obj = {}

    expect(hasProperty(obj, sym)).toBe(false)
  })

  it('should return false for undefined and null values', () => {
    expect(hasProperty(undefined, 'foo')).toBe(false)
    expect(hasProperty(null, 'foo')).toBe(false)
  })

  it('should return false for non-object values', () => {
    expect(hasProperty(123, 'foo')).toBe(false)
    expect(hasProperty('hello', 'foo')).toBe(false)
    expect(hasProperty(true, 'foo')).toBe(false)
  })
})
