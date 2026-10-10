/**
 * chunkArray(items, size) — split items into consecutive chunks of at most size
 * elements each, preserving order; the last chunk is shorter when
 * items.length is not divisible by size.
 *
 * Args: items (array): the array to split.
 *       size (number): maximum elements per chunk; must be a positive integer.
 * Returns: array of chunks (arrays); [] when items is empty.
 * Throws: RangeError if size is not a positive integer (including zero).
 *         TypeError if items is not an array.
 */
export function chunkArray(items, size) {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  if (!Number.isInteger(size) || size <= 0) throw new RangeError("size must be a positive integer");

  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}
