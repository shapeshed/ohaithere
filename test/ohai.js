var assert = require ('assert')
  , ohai = require('../lib/ohai');

assert.equal(
  ohai.hello(), 
  'Hello from the ohai module', 
  'Expected "ohai". Got "' + ohai.hello() + '"'
)

