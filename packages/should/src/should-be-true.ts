/**
 * shouldBeTrue checks if the provided value is strictly true.
 * If it is not, it throws an error.
 *
 * @param v value that should always be true
 * @param message custom error message to throw if the value is not true
 * @throws {Error} if the value is not true
 */
const shouldBeTrue = (v: unknown, message?: string): void => {
  if (v !== true) {
    throw new Error(message ?? `should be true, but got ${String(v)}`)
  }
}

export { shouldBeTrue }
