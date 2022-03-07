# Valid URL

## Documentation
### Require the package
```js
const validurl = require('./validurl.js');
```

### Use the package
```js
validurl("httos://github.com")
```

## Example
```js
const validurl = require('./validurl.js');
const urls = {
  "https://github.com",
  "This is not a URL"
}
console.log(validurl(urls[0])) // returns true
console.log(validurl(urls[1])) // returns false
```

## Note
This package may take some time to load because it uses the JavaScript __new URL()__ component. Sorry, but we now this problem.
