# tiny-delegate
 
Event delegation for DOM events

[![browser support](https://ci.testling.com/scottcorgan/tiny-delegate.png)](https://ci.testling.com/scottcorgan/tiny-delegate)
 
## Install
 
```
npm install tiny-delegate --save
```
 
## Usage

### Browserify

```js
var delegate = require('tiny-delegate');
var bind = delegate('body');

bind('.some-element', 'click', function (e) {
  // Do something
});
```
 
### Standalone

```html
<script src="/bower_components/tiny-delegate/dist/tinydelegate.js"></script>
```

```js
var delegate = window.tinyDelegate;
var bind = delegate('body');

bind('.some-element', 'click', function (e) {
  // Do something
});
``` 

## Run Tests
 
Requires [Phantomjs](http://phantomjs.org/download.html) is installed
 
```
npm install
npm test
```