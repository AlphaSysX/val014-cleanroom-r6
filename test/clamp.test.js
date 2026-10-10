import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp } from "../src/clamp.js";

test("clamp returns value when min <= value <= max", () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
  assert.equal(clamp(-3, -5, -1), -3);
});

test("clamp returns min when value < min", () => {
  assert.equal(clamp(-1, 0, 10), 0);
  assert.equal(clamp(-100, 0, 10), 0);
});

test("clamp returns max when value > max", () => {
  assert.equal(clamp(11, 0, 10), 10);
  assert.equal(clamp(100, 0, 10), 10);
});

test("clamp throws RangeError when min > max", () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
  assert.throws(() => clamp(5, 1, 0), RangeError);
});

test("clamp throws TypeError when any argument is not a finite number", () => {
  assert.throws(() => clamp("5", 0, 10), TypeError);
  assert.throws(() => clamp(5, "0", 10), TypeError);
  assert.throws(() => clamp(5, 0, "10"), TypeError);
  assert.throws(() => clamp(NaN, 0, 10), TypeError);
  assert.throws(() => clamp(5, NaN, 10), TypeError);
  assert.throws(() => clamp(5, 0, NaN), TypeError);
  assert.throws(() => clamp(Infinity, 0, 10), TypeError);
  assert.throws(() => clamp(5, -Infinity, 10), TypeError);
  assert.throws(() => clamp(null, 0, 10), TypeError);
  assert.throws(() => clamp(undefined, 0, 10), TypeError);
});
