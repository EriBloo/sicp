import { gcd } from './chapterOne';

export function makeRational(n: number, d: number): Rational {
  if (d === 0 && n !== 0) {
    throw new Error("Can't divide by 0.");
  };
  const neg = (n < 0 !== d < 0);
  const g = gcd(n, d);
  return {
    numer: (neg ? -1 : 1) * Math.abs(n / g),
    denom: Math.abs(d / g),
  };
};

export function addRational(x: Rational, y: Rational): Rational {
  return makeRational(
    x.numer * y.denom + y.numer * x.denom,
    x.denom * y.denom,
  );
};

export function subRational(x: Rational, y: Rational): Rational {
  return makeRational(
    x.numer * y.denom - y.numer * x.denom,
    x.denom * y.denom,
    );
};

export function mulRational(x: Rational, y: Rational): Rational {
  return makeRational(
    x.numer * y.numer,
    x.denom * y.denom,
    );
};

export function divRational(x: Rational, y: Rational): Rational {
  return makeRational(
    x.numer * y.denom,
    x.denom * y.numer,
    );
};

export function equalRational(x: Rational, y: Rational): boolean {
  return x.numer * y.denom === x.denom * y.numer;
};

export function printRational(r: Rational): void {
  console.log(`${r.numer}/${r.denom}`);
};

export function makePoint(x: number, y: number): Point {
  return { x, y };
};

export function makeSegment(start: Point, end: Point): Segment {
  return { start, end };
};

export function midpointSegment(s: Segment): Point {
  return {
    x: (s.end.x - s.start.x) / 2,
    y: (s.end.y - s.start.y) / 2,
  };
};

export function printPoint(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
};
