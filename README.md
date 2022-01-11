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

To achieve all the above using `package.json`, add the following:

```json
  "eslintConfig": {
    "extends": "portsoc-ts",
    "root": true,
    "env": {
      "browser": true
    }
  }
```

You will need a `tsconfig.json` file at the root of your project, such as this template:
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
      "allowSyntheticDefaultImports": true,
      "allowUnreachableCode": false
    },
    "include": [
      "src"
    ]
  }
```

The `include` section above should point to any directories with your TypeScript and JavaScript files.

Happy linting!

## Contributing

We are always delighted to receive pull requests, even for something as small as a typo.

## Adding rules and tests

If you'd like to add rules that are not specific to TypeScript but also apply to JavaScript, they should be submitted to [the `eslint-config-portsoc` package](https://github.com/portsoc/eslint-config-portsoc).

New TS-specific rules need to be added to the `overrides` section of `index.js`.

Tests need to be added to the `/tests/files/` directory and should have a suffix depending on whether they should pass or fail linting:
- `-good.ts` if the test should pass linting
- `-bad.ts` if the test should fail linting
  - bad tests should always have only one instance of the error that's being checked; it's common to have one `-good.ts` file and multiple `-bad.ts` files for any rule.

Run tests with `npm test`.
