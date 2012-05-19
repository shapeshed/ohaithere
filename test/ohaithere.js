var assert = require ('assert');
var ohaithere = require('../lib/ohaithere');

assert.equal(
  ohaithere.hello(), 
  'Hello from the ohaithere module', 
  'Expected "Hello from the ohaithere module". Got "' + ohaithere.hello() + '"'
)

