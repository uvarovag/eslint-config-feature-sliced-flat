# @feature-sliced/eslint-config adapter for ESLint 9 Flat Config

A shared ESLint configuration for TypeScript and React projects.

## Installation

To use this configuration in your project, install the required dependencies:

```bash
npm install --save-dev @uvarovag/eslint-config-feature-sliced-flat eslint@^9.16.0
```

## Usage: Create a `eslint.config.js` file

```js
import featureSliced from '@uvarovag/eslint-config-feature-sliced-flat'

export default [...featureSliced, ...projectFlatConfig]
```
