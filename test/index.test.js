import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, countVowels } from "../src/index.js";

test("greet returns a greeting for a name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet rejects non-string input", () => {
  assert.throws(() => greet(42), TypeError);
});

test("countVowels counts lowercase vowels", () => {
  assert.equal(countVowels("banana"), 3);
  assert.equal(countVowels("aeiou"), 5);
});

test("countVowels matches uppercase vowels case-insensitively", () => {
  assert.equal(countVowels("BANANA"), 3);
  assert.equal(countVowels("AEIOU"), 5);
});

test("countVowels counts mixed-case vowels", () => {
  assert.equal(countVowels("HeLLo WoRLd"), 3);
  assert.equal(countVowels("AeIoU"), 5);
});

test("countVowels returns 0 when there are no vowels", () => {
  assert.equal(countVowels("rhythm"), 0);
  assert.equal(countVowels("123 !?#"), 0);
});

test("countVowels returns 0 for an empty string", () => {
  assert.equal(countVowels(""), 0);
});

test("countVowels returns a number type", () => {
  assert.equal(typeof countVowels("hello"), "number");
  assert.equal(typeof countVowels(""), "number");
});
