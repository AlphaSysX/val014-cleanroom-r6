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

/**
 * countVowels(text) — return the number of ASCII vowel letters (a, e, i, o, u) in text,
 * matched case-insensitively.
 *
 * Args: text (string).
 * Returns: number of ASCII vowel letters (0 for a string with none, or an empty string).
 * Throws: TypeError if text is not a string.
 */
export function countVowels(text) {
  if (typeof text !== "string") throw new TypeError("text must be a string");
  const matches = text.match(/[aeiou]/gi);
  return matches === null ? 0 : matches.length;
}
