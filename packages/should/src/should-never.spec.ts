import { describe, expect, it } from 'vitest'

import { shouldNever } from './should-never.js'

describe('should never', () => {
  it('should always throw', () => {
    expect(() => shouldNever()).toThrow()
  })
})
