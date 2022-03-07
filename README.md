# Valid URL

## Get started
Just copy the __validurl.js__ file. And then you're ready to use this nicely package.

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

## HTML
### Use with script tag
```html
<script src="https://valid-url.dinoscapedinosc.repl.co"></script>
```

### Example
```html
<script>
  alert($("github.com"))
  alert($("This is not a URL"))
</script>
```

## Note
This package may take some time to load because it uses the JavaScript __new URL()__ component. Sorry, but we now this problem.

## Developer
Add __Dinoscape#4056__ on Discord to get in contact with me.
