const shouldNever = (message?: string): never => {
  throw new Error(message ?? 'should never be called')
}

export { shouldNever }
