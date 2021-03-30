import { gcd } from './chapterOne';

export function makeRational(n: number, d: number): Rational {
  if (d === 0 && n !== 0) {
    throw new Error("Can't divide by 0.");
  }
  const neg = n < 0 !== d < 0;
  const g = gcd(n, d);
  return {
    numer: (neg ? -1 : 1) * Math.abs(n / g),
    denom: Math.abs(d / g),
  };
}

export function addRational(x: Rational, y: Rational): Rational {
  return makeRational(x.numer * y.denom + y.numer * x.denom, x.denom * y.denom);
}

export function subRational(x: Rational, y: Rational): Rational {
  return makeRational(x.numer * y.denom - y.numer * x.denom, x.denom * y.denom);
}

export function mulRational(x: Rational, y: Rational): Rational {
  return makeRational(x.numer * y.numer, x.denom * y.denom);
}

export function divRational(x: Rational, y: Rational): Rational {
  return makeRational(x.numer * y.denom, x.denom * y.numer);
}

export function equalRational(x: Rational, y: Rational): boolean {
  return x.numer * y.denom === x.denom * y.numer;
}

export function printRational(r: Rational): void {
  console.log(`${r.numer}/${r.denom}`);
}

export function makePoint(x: number, y: number): Point {
  return { x, y };
}

export function makeSegment(start: Point, end: Point): Segment {
  return { start, end };
}

export function midpointSegment(s: Segment): Point {
  return {
    x: (s.end.x + s.start.x) / 2,
    y: (s.end.y + s.start.y) / 2,
  };
}

export function printPoint(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
}

export function makeRectangle(start: Point, end: Point): Rectangle {
  return {
    a: start,
    b: makePoint(start.x, end.y),
    c: end,
    d: makePoint(end.x, start.y),
  };
}

export function segmentLength(s: Segment): number {
  return Math.sqrt(
    Math.pow(s.end.x - s.start.x, 2) + Math.pow(s.end.y - s.start.y, 2),
  );
}

export function perimeter(r: Rectangle): number {
  return (
    2 * segmentLength(makeSegment(r.a, r.b)) +
    2 * segmentLength(makeSegment(r.a, r.d))
  );
}

export function area(r: Rectangle): number {
  return (
    segmentLength(makeSegment(r.a, r.b)) * segmentLength(makeSegment(r.a, r.d))
  );
}

export function cons(x: any, y: any): any {
  function dispatch(m: 0 | 1): typeof x | typeof y {
    if (m === 0) {
      return x;
    } else if (m === 1) {
      return y;
    } else {
      throw new Error('Argument must be 0 or 1');
    }
  }
  return dispatch;
}

export function car(z: any): any {
  return z(0);
}

export function cdr(z: any): any {
  return z(1);
}

export function consWithProduct(x: number, y: number): number {
  return Math.pow(2, x) * Math.pow(3, y);
}

export function zeroRemainderDivisions(
  a: number,
  b: number,
  n: number = 0,
): number {
  if (a % b === 0) {
    return zeroRemainderDivisions(a / b, b, n + 1);
  }
  return n;
}

export function carWithProduct(z: number): number {
  return zeroRemainderDivisions(z, 2);
}

export function cdrWithProduct(z: number): number {
  return zeroRemainderDivisions(z, 3);
}

export const zero = (f: any) => (x: any) => x;

export function next(n: any): any {
  return (f: any) => (x: any) => f(n(f)(x));
}

export const one = (f: any) => (x: any) => f(((f: any) => (x: any) => x)(f)(x));

export const two = (f: any) => (x: any) =>
  f(((f: any) => (x: any) => f(((f: any) => (x: any) => x)(f)(x)))(f)(x));

export function add(n: any, m: any): any {
  return (f: any) => (x: any) => n(f)(m(f)(x));
}

export function makeInterval(a: number, b: number): Interval {
  if (a < b) {
    return { lower: a, upper: b };
  }
  return { lower: b, upper: a };
}

export function upperBound(i: Interval): number {
  return i.upper;
}

export function lowerBound(i: Interval): number {
  return i.lower;
}

export function addInterval(x: Interval, y: Interval): Interval {
  return makeInterval(
    lowerBound(x) + lowerBound(y),
    upperBound(x) + upperBound(y),
  );
}

export function mulInterval(x: Interval, y: Interval): Interval {
  const p1 = lowerBound(x) * lowerBound(y);
  const p2 = lowerBound(x) * upperBound(y);
  const p3 = upperBound(x) * lowerBound(y);
  const p4 = upperBound(x) * upperBound(y);
  return makeInterval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4));
}

export function divInterval(x: Interval, y: Interval): Interval {
  if (lowerBound(y) * upperBound(y) <= 0) {
    throw new Error('Interval spans 0.');
  }
  return mulInterval(x, makeInterval(1 / upperBound(y), 1 / lowerBound(y)));
}

export function subInterval(x: Interval, y: Interval): Interval {
  return makeInterval(
    lowerBound(x) - upperBound(y),
    upperBound(x) - lowerBound(y),
  );
}

export function makeCenterWidth(c: number, w: number): Interval {
  return makeInterval(c - w, c + w);
}

export function center(i: Interval): number {
  return (lowerBound(i) + upperBound(i)) / 2;
}

export function width(i: Interval): number {
  return (upperBound(i) - lowerBound(i)) / 2;
}

export function makeCenterPercent(c: number, p: number): Interval {
  return makeCenterWidth(c, (p / 100) * c);
}

export function percent(i: Interval): number {
  return (width(i) / center(i)) * 100
}

export function list(...args: any): any {
  return args.reverse().reduce((prev: any, curr: any) => cons(curr, prev), null);
}

export function printList(list: any): void {
  let output = '';
  let current = list;
  while (current !== null) {
    output += car(current);
    output += ' ';
    current = cdr(current);
  }
  console.log(`(${output.slice(0, -1)})`);
}
