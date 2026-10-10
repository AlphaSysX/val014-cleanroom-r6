/**
 * clamp(value, min, max) — constrain a number to the inclusive range [min, max].
 *
 * Args: value (number), min (number), max (number) — each must be a finite number.
 * Returns: value if min <= value <= max; min if value < min; max if value > max.
 * Throws: TypeError if any of value, min, or max is not a finite number; this
 *   guard runs first, before the range check below.
 * Throws: RangeError if min > max.
 */
export function clamp(value, min, max) {
  if (!Number.isFinite(value) || !Number.isFinite(min) || !Number.isFinite(max)) {
    throw new TypeError("clamp: value, min, and max must all be finite numbers");
  }
  if (min > max) {
    throw new RangeError("clamp: min must not be greater than max");
  }
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
