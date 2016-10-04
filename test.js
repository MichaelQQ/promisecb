import test from 'tape';
import cbPromise from './dist/index';

test('cbPrmise test', (t) => {
  const expect = '[object Promise]';
  const actual = cbPromise(setTimeout, 100).toString();

  t.equal(actual, expect, 'should return promise');
  t.end();
});
