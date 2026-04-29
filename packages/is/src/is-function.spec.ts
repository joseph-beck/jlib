import { describe, expect, it } from 'vitest'

import { isFunction } from './is-function.js'

describe('is function', () => {
  it('should return true for functions', () => {
    expect(
      isFunction(() => {
        void 0
      }),
    ).toBe(true)

    expect(
      isFunction(function () {
        void 0
      }),
    ).toBe(true)

    expect(
      // eslint-disable-next-line @typescript-eslint/require-await
      isFunction(async function () {
        void 0
      }),
    ).toBe(true)
  })

  it('should return false for non-functions', () => {
    expect(isFunction('hello')).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction(123)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction([])).toBe(false)
  })
})
