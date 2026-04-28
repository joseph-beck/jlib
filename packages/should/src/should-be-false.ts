const shouldBeFalse = (v: unknown, message?: string): void => {
  if (v !== false) {
    throw new Error(message ?? `should be false, but got ${String(v)}`)
  }
}

export { shouldBeFalse }
