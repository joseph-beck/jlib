const hasProperty = (v: unknown, k: PropertyKey): boolean =>
  typeof v === 'object' && v !== null && v !== undefined && Object.hasOwn(v, k)

export { hasProperty }
