# @feature-sliced/eslint-config adapter for ESLint 9 Flat Config

## Installation

To use this configuration in your project, install the required dependencies:

```bash
npm install --save-dev @uvarovag/eslint-config-feature-sliced-flat eslint@^9.16.0
```

## Usage

### Create a `eslint.config.mjs` file

```js
import featureSliced from '@uvarovag/eslint-config-feature-sliced-flat'
// Import your custom project-specific ESLint 9 flat configuration
import projectSpecificConfig from 'project-config'

export default [...featureSliced, ...projectSpecificConfig]
```
