/**
 * reverseWords(text) — reverse the order of words in text.
 *
 * Splits the input on runs of whitespace (consecutive whitespace characters
 * count as a single delimiter), reverses the word order, and joins the words
 * with a single space. Each word's characters are preserved verbatim — no
 * case folding, trimming inside words, or other transformation is applied.
 *
 * Args: text (string).
 * Returns: string with the words in reverse order, joined by single spaces.
 * Edge cases: "" and whitespace-only input return ""; a single word is
 * returned unchanged; leading/trailing whitespace produces no empty tokens.
 */
export function reverseWords(text) {
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  return words.reverse().join(" ");
}
