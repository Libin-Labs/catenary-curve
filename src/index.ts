function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function length(v: number): void {
  finite(v, 1e-9, 1e9);
}
export function catenaryAt(
  x: number,
  a: number,
): { y: number; slope: number; arcFromZero: number } {
  length(a);
  finite(x);
  const z = x / a;
  if (Math.abs(z) > 20) throw new RangeError('Normalized coordinate budget');
  const half = Math.sinh(z / 2),
    slope = Math.sinh(z);
  return { y: 2 * a * half * half, slope, arcFromZero: a * slope };
}
