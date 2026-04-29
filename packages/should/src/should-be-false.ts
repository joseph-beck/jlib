/**
 * shouldBeFalse checks if the provided value is strictly false.
 * If it is not, it throws an error.
 *
 * @param v value that should always be false
 * @param message custom error message to throw if the value is not false
 * @throws {Error} if the value is not false
 */
const shouldBeFalse = (v: unknown, message?: string): void => {
  if (v !== false) {
    throw new Error(message ?? `should be false, but got ${String(v)}`)
  }
}

export { shouldBeFalse }
