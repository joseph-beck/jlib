const shouldNever = (message?: string): void => {
  throw new Error(message ?? 'should never be called')
}

export { shouldNever }
