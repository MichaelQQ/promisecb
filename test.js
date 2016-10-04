const test = require('tape');
const promisecb = require('./dist/index.js').promisecb;

test('cbPrmise test', function (t) {
  const expect = '[object Promise]';
  const actual = promisecb(setTimeout, 100).toString();

  t.equal(actual, expect, 'should return promise');
  t.end();
});
