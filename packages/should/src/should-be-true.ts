const shouldBeTrue = (v: unknown, message?: string): void => {
  if (v !== true) {
    throw new Error(message ?? `should be true, but got ${String(v)}`)
  }
}

export { shouldBeTrue }
