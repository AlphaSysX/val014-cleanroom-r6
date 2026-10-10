/**
 * greet(name) — return "Hello, <name>!" for a non-empty string name.
 *
 * Args: name (string).
 * Returns: string greeting.
 * Throws: TypeError if name is not a string or is empty.
 */
export function greet(name) {
  if (typeof name !== "string" || name.length === 0) throw new TypeError("name must be a non-empty string");
  return `Hello, ${name}!`;
}
