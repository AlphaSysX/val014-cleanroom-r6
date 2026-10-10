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
