/**
 * isPrime(n) — report whether integer n is a prime number.
 *
 * n must be an integer: non-integer input (a fractional number, NaN,
 * Infinity, null, a string, or anything else for which Number.isInteger(n)
 * is false) throws a TypeError. Values less than 2 return false. For n >= 2
 * primality is decided by trial division: iterating divisors from 2 up to
 * sqrt(n) (using d * d <= n), returning false on the first divisor found
 * and true otherwise.
 *
 * Args: n (integer).
 * Returns: boolean — true if n is prime, false otherwise.
 * Throws: TypeError if n is not an integer.
 */
export function isPrime(n) {
  if (!Number.isInteger(n)) throw new TypeError("n must be an integer");
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false;
  }
  return true;
}
