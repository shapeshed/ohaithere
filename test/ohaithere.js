var assert = require ('assert')
  , ohai = require('../lib/ohaithere');

assert.equal(
  ohai.hello(), 
  'Hello from the ohaithere module', 
  'Expected "Hello from the ohaithere module". Got "' + ohai.hello() + '"'
)

