// Modules - encapsulated code (only share minimum)
// CommonJS, every file in Node is a module (by default)

const names = require('./4-module');
const sayHi = require('./5-utils');
const uncleBoby = require('./6-alternative-flavor');
require('./7-mind');

sayHi('Slava');
sayHi(names.john);
sayHi(names.peter);
