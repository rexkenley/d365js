# d365js
A starter kit for writing professional d365 JS webresources

**Installation**
- [NodeJS](https://nodejs.org/en/)

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

**Recommended packages**
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library
  - npm i date-fns
- [libphonenumber-js](https://catamphetamine.github.io/libphonenumber-js/) - A simpler and smaller rewrite of Google Android's libphonenumber library.
  - npm i libphonenumber-js
- [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.
  - npm i lodash
- [validatorjs](https://github.com/validatorjs/validator.js) - A library of string validators and sanitizers.
  - npm i validator

**References**
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [jsdocs](https://devdocs.io/jsdoc/)
- [jest](https://jestjs.io/docs/en/getting-started)

**Code Recommendations**
1. Code your tasks as independent functions with parameters. This way you can unit test your functions and easily use them in other forms without being tied to a specific entity.
2. KISS - Keep it simple (you know). If your functions do 1 and only 1 thing, then it is a lot easier to debug. Design your code like legos.
3. Modularize your code as much as possible. Let [webpack](https://webpack.js.org/concepts/) do the work of bringing it all together and "[tree shake](https://webpack.js.org/guides/tree-shaking/)" your code.
4. Your users don't care about your code as long as it works, so don't forget to minify when sending it to production.
5. Do not forget to test and document your code. [Jest](https://jestjs.io/docs/en/getting-started) and [JSDoc](https://devdocs.io/jsdoc/) are your friends.
