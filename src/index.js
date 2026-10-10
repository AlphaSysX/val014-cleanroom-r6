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
 * countVowels(text) — return the number of ASCII vowel letters (a, e, i, o, u)
 * appearing in text, matched case-insensitively.
 *
 * Args: text (string).
 * Returns: number of vowel letters.
 */
export function countVowels(text) {
  let count = 0;
  for (const ch of text) {
    if ("aeiouAEIOU".includes(ch)) count++;
  }
  return count;
}
