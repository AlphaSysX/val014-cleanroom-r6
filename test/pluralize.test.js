import { test } from "node:test";
import assert from "node:assert/strict";
import { pluralize } from "../src/pluralize.js";

test("pluralize returns singular when count === 1", () => {
  assert.equal(pluralize(1, "cat"), "cat");
  assert.equal(pluralize(1, "cat", "cats"), "cat");
});

test("pluralize returns plural when plural is given and count !== 1", () => {
  assert.equal(pluralize(0, "cat", "cats"), "cats");
  assert.equal(pluralize(2, "cat", "cats"), "cats");
  assert.equal(pluralize(2, "child", "children"), "children");
});

test("pluralize appends s when no plural is given and count !== 1", () => {
  assert.equal(pluralize(0, "cat"), "cats");
  assert.equal(pluralize(3, "cat"), "cats");
  assert.equal(pluralize(-2, "box"), "boxs");
});

test("pluralize throws TypeError when count is not a finite number", () => {
  assert.throws(() => pluralize(NaN, "cat"), TypeError);
  assert.throws(() => pluralize(Infinity, "cat"), TypeError);
  assert.throws(() => pluralize(-Infinity, "cat"), TypeError);
  assert.throws(() => pluralize("2", "cat"), TypeError);
  assert.throws(() => pluralize(null, "cat"), TypeError);
  assert.throws(() => pluralize(undefined, "cat"), TypeError);
});

test("pluralize throws TypeError when singular is not a non-empty string", () => {
  assert.throws(() => pluralize(1, ""), TypeError);
  assert.throws(() => pluralize(1, 42), TypeError);
  assert.throws(() => pluralize(1, null), TypeError);
  assert.throws(() => pluralize(1, undefined), TypeError);
});
