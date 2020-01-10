# d365js
A starter kit for writing professional d365 JS webresources

**Commands**
- npm run lint
  - checks your source code for common mistakes
- npm run test
  - runs your test files in the test folder
- npm run doc
  - generates code documentation
- npm run build:form:dev -- source.js -o destination.js
  - lints and transpiles your code into one js file
- npm run build:form:prd -- source.js -o destination.js
  - lints and transpiles your code into one minified js file
- npm run build:chunk:dev -- source.js -o destination.js
  - lints and transpiles your code into manifest, vendor and source files
- npm run build:chunk:prd -- source.js -o destination.js
  - lints and transpiles your code into minified manifest, vendor and source files

**References**
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [jsdocs](https://devdocs.io/jsdoc/)
- [jest](https://jestjs.io/docs/en/getting-started)
