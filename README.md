# array-tree-filter

[![NPM version](https://img.shields.io/npm/v/exeq.svg?style=flat)](https://npmjs.org/package/exeq)
[![Build Status](https://img.shields.io/travis/afc163/exeq.svg?style=flat)](https://travis-ci.org/afc163/exeq)
[![David Status](https://img.shields.io/david/afc163/exeq.svg?style=flat)](https://david-dm.org/afc163/exeq)
[![NPM downloads](http://img.shields.io/npm/dm/exeq.svg?style=flat)](https://npmjs.org/package/exeq)

---

```js
var arrayTreeFilter = require('array-tree-filter');

var data = [{
  value: 'a',
  children: [{
    value: 'b',
    children: [{
      value: 'c'
    }, {
      value: 'd'
    }]
  }]
}];

var values = ['a', 'b', 'c'];

var result = arrayTreeFilter(data, function(item, level) {
  return item.value === values[level];
});

console.log(result);
// [
//   { value: 'a', children: [...] },
//   { value: 'b', children: [...] },
//   { value: 'c', children: [...] }
// ]
```
