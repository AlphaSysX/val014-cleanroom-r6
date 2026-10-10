import { test } from "node:test";
import assert from "node:assert/strict";
import { isPrime } from "../src/is-prime.js";

test("isPrime returns true for the smallest prime 2", () => {
  assert.equal(isPrime(2), true);
});

test("isPrime returns true for a larger prime", () => {
  assert.equal(isPrime(7919), true);
});

test("isPrime returns false for values less than 2", () => {
  assert.equal(isPrime(1), false);
  assert.equal(isPrime(0), false);
  assert.equal(isPrime(-7), false);
});

test("isPrime returns false for a composite odd number", () => {
  assert.equal(isPrime(9), false);
});

test("isPrime throws TypeError for non-integer inputs", () => {
  assert.throws(() => isPrime(3.5), TypeError);
  assert.throws(() => isPrime(NaN), TypeError);
  assert.throws(() => isPrime(Infinity), TypeError);
  assert.throws(() => isPrime(null), TypeError);
  assert.throws(() => isPrime("7"), TypeError);
});
