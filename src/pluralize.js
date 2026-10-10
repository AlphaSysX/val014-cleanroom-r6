/**
 * pluralize(count, singular, plural) — pick the singular or plural form for a count.
 *
 * Returns the singular argument when count === 1. When count !== 1 and a
 * plural argument is given, returns the plural argument; when count !== 1 and
 * no plural argument is given, returns singular + "s".
 *
 * Args: count (number): finite count selecting the form.
 *       singular (string): non-empty singular form.
 *       plural (string): optional plural form; defaults to singular + "s".
 *
 * Returns: string — singular when count === 1, plural when given and
 * count !== 1, otherwise singular + "s".
 *
 * Throws: TypeError if count is not a finite number (e.g. NaN, Infinity,
 * a string, or null), or if singular is not a non-empty string.
 */
export function pluralize(count, singular, plural) {
  if (typeof count !== "number" || !Number.isFinite(count)) {
    throw new TypeError("count must be a finite number");
  }
  if (typeof singular !== "string" || singular.length === 0) {
    throw new TypeError("singular must be a non-empty string");
  }
  if (count === 1) return singular;
  if (plural !== undefined) return plural;
  return singular + "s";
}
