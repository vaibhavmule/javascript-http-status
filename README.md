# HTTP Status

[![Build Status](https://travis-ci.org/vaibhavmule/javscript-status.svg)](https://travis-ci.org/vaibhavmule/javascript-status)
[![npm version](https://img.shields.io/npm/v/javascript-status.svg)](https://www.npmjs.com/package/javascript-status)
[![npm downloads](https://img.shields.io/npm/dm/javascript-status.svg?maxAge=2592000)](https://www.npmjs.com/package/javascript-status)


Javascript Status is tiny HTTP status code utility library for readability.

## Install

```
$ npm i --save javascript-status
```

## Usage

ES5
```js
var status = require('javascript-status').default; // Don't forget the .default here.
var express = require('express')

app.get('/', function (req, res) {
  res.send('Hello World!', status.http200Ok);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

ES6 import statement and usage
```js
import status from 'javascript-status'

console.log(status.http201Created)
```
