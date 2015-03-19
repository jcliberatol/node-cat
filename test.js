var assert = require('assert');
var binding = require('./build/Release/hello.node');
console.log( binding.hello() );
