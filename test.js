const test = require('tape');
const cbPromisify = require('./dist/index.js').cbPromisify;

test('cbPrmise test', function (t) {
  const expect = '[object Promise]';
  const actual = cbPromisify(setTimeout, 100).toString();

  t.equal(actual, expect, 'should return promise');
  t.end();
});
