import { jblibConfig } from '@jblib/eslint'
import { type Linter } from 'eslint'

const config: Linter.Config[] = [...jblibConfig]

export default config
