import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.catenaryAt(0, 2).y - 0) < 1e-10);
});
test('analytic height', () => {
  assert.ok(Math.abs(api.catenaryAt(2, 2).y - 2 * (Math.cosh(1) - 1)) < 1e-14);
});
test('even height odd slope', () => {
  const a = api.catenaryAt(2, 3),
    b = api.catenaryAt(-2, 3);
  assert.equal(a.y, b.y);
  assert.equal(a.slope, -b.slope);
});
test('tiny height', () => {
  assert.ok(Math.abs(api.catenaryAt(1e-8, 1).y / 5e-17 - 1) < 1e-14);
});
test('coordinate limit', () => {
  assert.throws(() => api.catenaryAt(21, 1));
  assert.throws(() => api.catenaryAt(1, 0));
});
test('type contract', () => {
  assert.throws(() => api.catenaryAt('0', 2));
});
