const test = require('tape');
const cbPromise = require('./dist/index.js').cbPromise;

test('cbPrmise test', function (t) {
  const expect = '[object Promise]';
  const actual = cbPromise(setTimeout, 100).toString();

  t.equal(actual, expect, 'should return promise');
  t.end();
});
