# @star-dancer/angular-config
This package provides Star-Dancer project

## Usage
We export three ESLint\Prettier\Stylelint\Webpack config with Angular project

install the correct versions of each package,which are listed by the command:

```bash
npm info "@star-dancer/angular-config@latest" peerDependencies
```
If using npm 5+, use this shortcut

```bash
// with npm
npx install-peerdeps --dev @star-dancer/angular-config
// with yarn
npx install-peerdeps --dev @star-dancer/angular-config --yarn

```

create more config file in your workspace:

```javascript
// .eslintrc.js
/* eslint-env node */
module.exports = require("@star-dancer/angular-config").ESLINT_CONFIG;
```
---
```javascript
// .prettierrc.js
/* eslint-env node */
module.exports = require("@star-dancer/angular-config").PRETTIER_CONFIG;
```
---
```javascript
// .stylelintrc.js
/* eslint-env node */
module.exports = require("@star-dancer/angular-config").STYLELINT_CONFIG;
```

add command script to package:

```json
{
    "scripts":{
        "lint:all": "npm run lint:eslint && npm run lint:stylelint",
        "lint:eslint": "eslint --cache --cache-file .cache/.eslintcache --ext .js,.html,.ts .",
        "lint:stylelint": "stylelint ./**/*.{css,scss}",
    }
}
```