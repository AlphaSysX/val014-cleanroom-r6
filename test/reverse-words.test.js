import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverse-words.js";

test("reverseWords reverses word order", () => {
  assert.equal(reverseWords("hello world"), "world hello");
});

test("reverseWords treats whitespace runs as a single delimiter", () => {
  assert.equal(reverseWords("one   two\tthree\nfour"), "four three two one");
});

test("reverseWords joins reversed words with a single space", () => {
  assert.equal(reverseWords("a  b  c"), "c b a");
});

test("reverseWords preserves each word's characters verbatim", () => {
  assert.equal(reverseWords("HeLLo WoRld-123!"), "WoRld-123! HeLLo");
});

test("reverseWords returns empty string for empty input", () => {
  assert.equal(reverseWords(""), "");
});

test("reverseWords returns empty string for whitespace-only input", () => {
  assert.equal(reverseWords("   \t\n  "), "");
});

test("reverseWords returns a single word unchanged", () => {
  assert.equal(reverseWords("solo"), "solo");
});

test("reverseWords ignores leading and trailing whitespace without empty tokens", () => {
  assert.equal(reverseWords("  one two three  "), "three two one");
});
