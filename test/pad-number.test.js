import { test } from "node:test";
import assert from "node:assert/strict";
import { padNumber } from "../src/pad-number.js";

test("padNumber left-pads with zeros to reach width", () => {
  assert.equal(padNumber(42, 5), "00042");
});

test("padNumber returns the rendering unchanged when it already meets or exceeds width", () => {
  assert.equal(padNumber(123456, 3), "123456");
  assert.equal(padNumber(42, 2), "42");
});

test("padNumber applies no padding when width is 0", () => {
  assert.equal(padNumber(7, 0), "7");
});

test("padNumber pads zero and fractional renderings", () => {
  assert.equal(padNumber(0, 3), "000");
  assert.equal(padNumber(3.5, 6), "0003.5");
});

test("padNumber pads the rendering literally, including a leading minus sign", () => {
  assert.equal(padNumber(-5, 4), "00-5");
});

test("padNumber throws TypeError when value is not a finite number", () => {
  assert.throws(() => padNumber(NaN, 3), TypeError);
  assert.throws(() => padNumber(Infinity, 3), TypeError);
  assert.throws(() => padNumber(-Infinity, 3), TypeError);
});

test("padNumber throws TypeError when value is not a number", () => {
  assert.throws(() => padNumber("42", 3), TypeError);
  assert.throws(() => padNumber(undefined, 3), TypeError);
  assert.throws(() => padNumber(null, 3), TypeError);
});

test("padNumber throws RangeError when width is a negative integer", () => {
  assert.throws(() => padNumber(42, -1), RangeError);
});

test("padNumber throws RangeError when width is not an integer", () => {
  assert.throws(() => padNumber(42, 2.5), RangeError);
  assert.throws(() => padNumber(42, NaN), RangeError);
  assert.throws(() => padNumber(42, Infinity), RangeError);
});

test("padNumber validates value before width", () => {
  assert.throws(() => padNumber(NaN, -1), TypeError);
});
