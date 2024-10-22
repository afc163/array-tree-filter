import { test, assert } from 'vitest';
import arrayTreeFilter from '../index.ts';

interface TreeNode {
  value: string;
  children?: TreeNode[];
  childNodes?: TreeNode[];
}

const data: TreeNode[] = [{
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

const values: string[] = ['a', 'b', 'c'];

test('基本用法', () => {
  const result = arrayTreeFilter(data, (item: TreeNode, level: number) => {
    return item.value === values[level];
  });
  assert.strictEqual(result.length, 3);
  assert.strictEqual(result[0].value, 'a');
  assert.strictEqual(result[1].value, 'b');
  assert.strictEqual(result[2].value, 'c');
});

const data2: TreeNode[] = [{
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

test('childrenKeyName', () => {
  const result = arrayTreeFilter(data2, (item: TreeNode, level: number) => {
    return item.value === values[level];
  }, {
    childrenKeyName: 'childNodes'
  });
  assert.strictEqual(result.length, 3);
  assert.strictEqual(result[0].value, 'a');
  assert.strictEqual(result[1].value, 'b');
  assert.strictEqual(result[2].value, 'c');
});

test('empty array input', () => {
  const result = arrayTreeFilter([], (item: TreeNode, level: number) => {
    return item.value === values[level];
  });
  assert.strictEqual(result.length, 0);
});

test('non-matching filter function', () => {
  const result = arrayTreeFilter(data, (item: TreeNode, level: number) => {
    return item.value === 'non-matching';
  });
  assert.strictEqual(result.length, 0);
});

const data3: TreeNode[] = [{
  value: 'a'
}];

test('tree with no children', () => {
  const result = arrayTreeFilter(data3, (item: TreeNode, level: number) => {
    return item.value === values[level];
  });
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].value, 'a');
});

const data4: TreeNode[] = [{
  value: 'a',
  children: [{
    value: 'b',
    children: [{
      value: 'c',
      children: [{
        value: 'd'
      }]
    }]
  }]
}];

test('tree with multiple levels of children', () => {
  const result = arrayTreeFilter(data4, (item: TreeNode, level: number) => {
    return item.value === values[level];
  });
  assert.strictEqual(result.length, 3);
  assert.strictEqual(result[0].value, 'a');
  assert.strictEqual(result[1].value, 'b');
  assert.strictEqual(result[2].value, 'c');
});

const data5: TreeNode[] = [{
  value: 'a',
  childNodes: [{
    value: 'b'
  }]
}];

test('custom childrenKeyName with no matching children', () => {
  const result = arrayTreeFilter(data5, (item: TreeNode, level: number) => {
    return item.value === values[level];
  }, {
    childrenKeyName: 'childNodes'
  });
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].value, 'a');
});
