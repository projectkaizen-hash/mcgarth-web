/**
 * In-memory fixed-window rate limiter.
 *
 * Deliberately process-local: adequate for a single-instance deployment and
 * it needs no infrastructure. If the app is ever scaled to multiple
 * instances, back this with a shared store (Redis/Upstash).
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Prune expired buckets so the map cannot grow without bound. */
function prune(now: number): void {
  if (buckets.size < 1000) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Record an attempt for `key`. Returns `true` when the attempt is allowed,
 * `false` when the key exceeded `limit` attempts inside `windowMs`.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): boolean {
  const now = Date.now();
  prune(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  bucket.count += 1;
  return bucket.count <= limit;
}

/** Clear a key (e.g. after a successful login). */
export function resetRateLimit(key: string): void {
  buckets.delete(key);
}

/** Extract the caller IP from request headers (first `x-forwarded-for` hop). */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip") ?? "unknown";
}
