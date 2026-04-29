/**
 * shouldNever always throws an error when called.
 * This is useful for failing in areas that should never be reached.
 *
 * @param message custom error message to throw if the value is called
 * @throws {Error} if the value is called
 */
const shouldNever = (message?: string): never => {
  throw new Error(message ?? 'should never be called')
}

export { shouldNever }
