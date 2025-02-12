import { createRequire } from 'module'
import boundaries from 'eslint-plugin-boundaries'
import importPlugin from 'eslint-plugin-import'

const require = createRequire(import.meta.url)

const importOrder = require('@feature-sliced/eslint-config/rules/import-order')
const layersSlices = require('@feature-sliced/eslint-config/rules/layers-slices')
const publicApi = require('@feature-sliced/eslint-config/rules/public-api')

export const importOrderFlat = {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
        import: importPlugin,
    },
    rules: importOrder.rules,
}

export const layersSlicesFlat = {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ...boundaries.configs.recommended,
    plugins: {
        boundaries,
    },
    settings: layersSlices.settings,
    rules: layersSlices.rules,
}

export const publicApiFlat = {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
        import: importPlugin,
    },
    rules: publicApi.rules,
}

export default [importOrderFlat, publicApiFlat, layersSlicesFlat]
