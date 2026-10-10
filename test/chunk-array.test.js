import { test } from "node:test";
import assert from "node:assert/strict";
import { chunkArray } from "../src/chunk-array.js";

test("chunkArray splits evenly divisible input into equal chunks", () => {
  assert.deepEqual(chunkArray([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test("chunkArray makes a shorter final chunk when length is not divisible", () => {
  assert.deepEqual(chunkArray([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("chunkArray returns an empty array for empty items", () => {
  assert.deepEqual(chunkArray([], 3), []);
});

test("chunkArray throws RangeError when size is zero", () => {
  assert.throws(() => chunkArray([1, 2], 0), RangeError);
});

test("chunkArray throws TypeError when items is not an array", () => {
  assert.throws(() => chunkArray("nope", 2), TypeError);
});
