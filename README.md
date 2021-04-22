# eslint-config-portsoc-ts

An ESLint config for Typescript based on `https://github.com/portsoc/eslint-config-portsoc`.



## Installation

For the stable version:

```sh
npm i --save-dev eslint eslint-config-portsoc-ts
```

For the latest development version:

```sh
npm i --save-dev eslint portsoc/eslint-config-portsoc-ts
```


## Configuration
Configuration can be stored as a YAML file or added to `package.json`.  For example, add the following in your project as `.eslintrc.yml`:

```yaml
extends: portsoc-ts
root: true
```

The default environment is Node.js. To lint client-side scripts, add this to your `.eslintrc.yml`:

```yaml
env:
  browser: true
```

To achieve all the above using `package.json` add the following:

```json
  "eslintConfig": {
    "extends": "portsoc-ts",
    "root": true,
    "env": {
      "browser": true
    }
  }
```

You will need a `tsconfig.json` file at the root of your project :
```json
  {
    "compilerOptions": {
      "outDir": "./dist-ts/",
      "sourceMap": true,
      "strictNullChecks": true,
      "strict": true,
      "noImplicitAny": true,
      "alwaysStrict": true,
      "module": "es2020",
      "target": "es2020",
      "moduleResolution": "node",
      "jsx": "react",
      "allowJs": true,
      "allowSyntheticDefaultImports": true
    },
    "include": [
      "All the directories you want to be linted",
    ]
  }
``` 

Happy linting!

## Contributing

We are always delighted to receive pull requests, even for something as small as a typo.
