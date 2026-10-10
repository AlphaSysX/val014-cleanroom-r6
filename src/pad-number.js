/**
 * padNumber(value, width) — render the finite number `value` in its plain
 * decimal form (as JavaScript renders it) and left-pad that rendering with
 * ASCII "0" characters to at least `width` characters; when the rendering
 * already has at least `width` characters it is returned unchanged.
 *
 * Args: value (number) — any finite number; width (number) — a non-negative
 * integer giving the minimum length of the result.
 * Returns: string — the rendering, left-padded with "0" to at least `width`
 * characters (unchanged when it already meets or exceeds `width`, including
 * when `width` is 0).
 * Throws: TypeError if value is not a finite number (e.g. NaN, Infinity,
 * -Infinity, or a non-number); RangeError if width is a negative integer;
 * RangeError if width is not an integer (e.g. 2.5, NaN, Infinity, or a
 * non-number). value is validated before width, so an invalid value raises
 * TypeError even when width is also invalid.
 */
export function padNumber(value, width) {
  if (!Number.isFinite(value)) throw new TypeError("value must be a finite number");
  if (!Number.isInteger(width) || width < 0) throw new RangeError("width must be a non-negative integer");
  return String(value).padStart(width, "0");
}
