import { test } from "node:test";
import assert from "node:assert/strict";
import { uniqueValues } from "../src/unique-values.js";

test("uniqueValues removes duplicates preserving first-occurrence order", () => {
  assert.deepEqual(uniqueValues([3, 1, 2, 1, 3, 2]), [3, 1, 2]);
});

test("uniqueValues keeps distinct values of different types distinct", () => {
  assert.deepEqual(uniqueValues([1, "1", true, 1]), [1, "1", true]);
});

test("uniqueValues treats NaN as equal to NaN (SameValueZero)", () => {
  const result = uniqueValues([NaN, 1, NaN]);
  assert.equal(result.length, 2);
  assert.ok(Number.isNaN(result[0]));
  assert.equal(result[1], 1);
});

test("uniqueValues treats +0 as equal to -0 (SameValueZero)", () => {
  const result = uniqueValues([0, -0, 1, -0]);
  assert.equal(result.length, 2);
  assert.equal(result[0], 0);
  assert.equal(result[1], 1);
});

test("uniqueValues returns a new array even when input has no duplicates", () => {
  const items = [1, 2, 3];
  const result = uniqueValues(items);
  assert.notEqual(result, items);
  assert.deepEqual(result, [1, 2, 3]);
});

test("uniqueValues returns a new array for an empty input", () => {
  const items = [];
  const result = uniqueValues(items);
  assert.notEqual(result, items);
  assert.deepEqual(result, []);
});

test("uniqueValues throws a TypeError when items is not an array", () => {
  for (const value of [undefined, null, 42, "abc", {}, new Set()]) {
    assert.throws(() => uniqueValues(value), TypeError);
  }
});

test("uniqueValues does not mutate the input array", () => {
  const items = [2, 2, NaN, "a", NaN, "a"];
  uniqueValues(items);
  assert.equal(items.length, 6);
  assert.equal(items[0], 2);
  assert.equal(items[1], 2);
  assert.ok(Number.isNaN(items[2]));
  assert.equal(items[3], "a");
  assert.ok(Number.isNaN(items[4]));
  assert.equal(items[5], "a");
});
