# dots

loading animation with dots. [demo](http://ramitos.github.com/dots)

## install

```bash
$ component install ramitos/dots
```

## example

```js
var dots = require('dots');

var loading = dots(document.getElementById('loading'));

loading.start();

setTimeout(function () {
  loading.stop();
}, 5000);

setTimeout(function () {
  loading.rm();
}, 6000);
```

## api

#### dots(element[, interval])

`interval` defaults to `250ms`

#### start()

#### stop()

#### rm()

## license

MIT