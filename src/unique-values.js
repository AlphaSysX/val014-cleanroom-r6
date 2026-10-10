/**
 * uniqueValues(items) — return a new array containing the elements of items
 * with duplicates removed, preserving first-occurrence order.
 *
 * Duplicate detection uses SameValueZero comparison (Set semantics): NaN is
 * considered equal to NaN, and +0 is considered equal to -0; all other values
 * of different types remain distinct.
 *
 * Args: items (Array) — the values to deduplicate. Not mutated.
 * Returns: new Array holding each distinct element of items once, in
 *   first-occurrence order. Always a fresh array (a different reference from
 *   items), even when items already contains no duplicates.
 * Throws: TypeError if items is not an array.
 */
export function uniqueValues(items) {
  if (!Array.isArray(items)) throw new TypeError("items must be an array");
  return [...new Set(items)];
}
