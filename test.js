/**
 * Module dependencies.
 */

// var assert = require('assert');

var Sheba = require('./index');

console.log('+ Sheba.validate');
console.log(Sheba.isValid('IR01234567890123456789')); // false
console.log(Sheba.isValid('IR012345678901234567890123456789')); // false
console.log(Sheba.isValid('IR01234567890123456789')); // false
console.log(Sheba.isValid('IR012345678901234567890123')); // false

console.log('----------------------');
console.log('+ Sheba.recognize');
console.log(Sheba.recognize('IR012345678901234567890123')); // false

console.log('----------------------');
console.log('+ Sheba.banks');
console.log(Sheba.banks);
