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
console.log(validurl(urls[0]))
console.log(validurl(urls[1]))
```
