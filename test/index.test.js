import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/index.js";

test("greet returns a greeting for a name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet rejects non-string input", () => {
  assert.throws(() => greet(42), TypeError);
});
