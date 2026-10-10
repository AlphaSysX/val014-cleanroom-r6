import { test } from "node:test";
import assert from "node:assert/strict";
import { greet, countVowels } from "../src/index.js";

test("greet returns a greeting for a name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet rejects non-string input", () => {
  assert.throws(() => greet(42), TypeError);
});

test("countVowels counts vowels in a lowercase string", () => {
  assert.equal(countVowels("beautiful day"), 6);
});

test("countVowels matches uppercase vowels case-insensitively", () => {
  assert.equal(countVowels("AEIOU aeiou"), 10);
});

test("countVowels returns 0 when there are no vowels", () => {
  assert.equal(countVowels("rhythm gld sllvrs"), 0);
});

test("countVowels returns a number type", () => {
  assert.equal(typeof countVowels("hello"), "number");
});

test("countVowels returns 0 for an empty string", () => {
  assert.equal(countVowels(""), 0);
});
