const test = require('node:test');
const assert = require('assert');
const arrayTreeFilter = require('../lib');

const data = [{
  value: 'a',
  children: [{
    value: 'b',
    children: [{
      value: 'c'
    }, {
      value: 'd'
    }]
  }]
}];

const values = ['a', 'b', 'c'];

test('basic use', (t) => {
  const result = arrayTreeFilter(data, (item, level) => {
    return item.value === values[level];
  });
  assert.strictEqual(result.length, 3);
  assert.strictEqual(result[0].value, 'a');
  assert.strictEqual(result[1].value, 'b');
  assert.strictEqual(result[2].value, 'c');
  t();
});

const data2 = [{
  value: 'a',
  childNodes: [{
    value: 'b',
    childNodes: [{
      value: 'c'
    }, {
      value: 'd'
    }]
  }]
}];

test('childrenKeyName', (t) => {
  const result = arrayTreeFilter(data2, (item, level) => {
    return item.value === values[level];
  }, {
    childrenKeyName: 'childNodes'
  });
  assert.strictEqual(result.length, 3);
  assert.strictEqual(result[0].value, 'a');
  assert.strictEqual(result[1].value, 'b');
  assert.strictEqual(result[2].value, 'c');
  t();
});
