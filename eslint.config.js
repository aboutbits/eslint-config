import { defineConfig } from 'eslint/config'
import ts from './configs/ts.js'

export default defineConfig([
    ts,
    {
        ignores: ['node_modules'],
    },
])
