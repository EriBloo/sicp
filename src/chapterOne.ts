export function square(x: number): number {
  return Math.pow(x, 2);
}

export function cube(x: number): number {
  return Math.pow(x, 3);
}

export function average(x: number, y: number): number {
  return (x + y) / 2;
}

export function sqrt(x: number): number {
  function goodEnough(guess: number): boolean {
    return Math.abs(square(guess) - x) < 0.001;
  }
  function improve(guess: number): number {
    return average(guess, x / guess);
  }
  function sqrtIter(guess: number): number {
    if (goodEnough(guess)) {
      return guess;
    } else {
      return sqrtIter(improve(guess));
    }
  }

  return sqrtIter(1.0);
}

export function factorial(n: number): number {
  function factIter(product: number, counter: number): number {
    if (counter > n) {
      return product;
    } else {
      return factIter(counter * product, counter + 1);
    }
  }
  return factIter(1, 1);
}

export function fibonacci(n: number): number {
  function fibIter(a: number, b: number, count: number): number {
    if (count === 1) {
      return b;
    } else {
      return fibIter(a + b, a, count - 1);
    }
  }
  return fibIter(1, 0, n);
}

export function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

export function sum(
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  if (a > b) {
    return 0;
  }
  return term(a) + sum(term, next(a), next, b);
}

export function integral(
  f: (x: number) => number,
  a: number,
  b: number,
  dx: number,
): number {
  function addDx(x: number): number {
    return x + dx;
  }
  return sum(f, a + dx / 2, addDx, b) * dx;
}

export function simpson(
  f: (x: number) => number,
  a: number,
  b: number,
  n: number,
): number {
  const h = (b - a) / n;
  let k = 0;
  function next(x: number): number {
    k += 1;
    return x + h;
  }
  function term(x: number): number {
    if (k === 0 || k === n) {
      return f(x);
    }
    return (2 + 2 * (k % 2)) * f(x);
  }
  return sum(term, a, next, a + (n + 1) * h) * (h / 3);
}

export function sumIter(
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  function iter(x: number, result: number): number {
    if (x > b) {
      return result;
    }
    return iter(next(x), term(x) + result);
  }
  return iter(a, 0);
}

export function product(
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  if (a > b) {
    return 1;
  }
  return term(a) * product(term, next(a), next, b);
}

export function piWallis(): number {
  function term(x: number): number {
    return square(2 * x) / ((2 * x - 1) * (2 * x + 1));
  }
  return product(term, 1, (x: number) => x + 1, 1000) * 2;
}

export function productIter(
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  function iter(x: number, result: number): number {
    if (x > b) {
      return result;
    }
    return iter(next(x), term(x) * result);
  }
  return iter(a, 1);
}

export function accumulate(
  combiner: (x: number, y: number) => number,
  nullValue: number,
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  if (a > b) {
    return nullValue;
  }
  return combiner(
    term(a),
    accumulate(combiner, nullValue, term, next(a), next, b),
  );
}

export function filteredAccumulate(
  combiner: (x: number, y: number) => number,
  filter: (x: number) => boolean,
  nullValue: number,
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number,
): number {
  if (a > b) {
    return nullValue;
  }
  if (filter(a)) {
    return combiner(
      term(a),
      filteredAccumulate(combiner, filter, nullValue, term, next(a), next, b),
    );
  }
  return filteredAccumulate(
    combiner,
    filter,
    nullValue,
    term,
    next(a),
    next,
    b,
  );
}

export function smallestDivisor(n: number): number {
  function findDivisor(n: number, test: number): number {
    if (square(test) > n) {
      return n;
    } else if (n % test === 0) {
      return test;
    }
    return findDivisor(n, test + 1);
  }
  return findDivisor(n, 2);
}

export function isPrime(n: number): boolean {
  return smallestDivisor(n) === n;
}

export function squareOfPrimes(start: number, end: number): number {
  return filteredAccumulate(
    (x, y) => x + y,
    isPrime,
    0,
    square,
    start,
    (x) => x + 1,
    end,
  );
}

export function productOfRelativePrimes(end: number): number {
  function isRelativePrime(test: number): boolean {
    return gcd(test, end) === 1;
  }
  return filteredAccumulate(
    (x, y) => x * y,
    isRelativePrime,
    1,
    (x) => x,
    2,
    (x) => x + 1,
    end,
  );
}

export function fixedPoint(
  f: (x: number) => number,
  firstGuess: number,
): number {
  const tolerance = 0.00001;
  function closeEnough(a: number, b: number): boolean {
    return Math.abs(a - b) < tolerance;
  }
  function tryGuess(guess: number): number {
    const next = f(guess);
    if (closeEnough(guess, next)) {
      return next;
    }
    return tryGuess(next);
  }
  return tryGuess(firstGuess);
}

export function kTermFiniteContinuedFraction(
  n: (x: number) => number,
  d: (x: number) => number,
  k: number,
): number {
  function iter(x: number): number {
    if (k === x) {
      return n(x) / d(x);
    }
    return n(x) / (d(x) + iter(x + 1));
  }
  return iter(1);
}

export function eulerExpansion(k: number): number {
  function getD(d: number): number {
    if ((d - 2) % 3 === 0) {
      return 2 + (2 * (d - 2)) / 3;
    }
    return 1;
  }
  return kTermFiniteContinuedFraction((x) => 1, getD, k) + 2;
}

export function lambertTangent(x: number, k: number): number {
  function getD(d: number): number {
    return 2 * d - 1;
  }
  function getN(n: number) {
    if (n === 1) {
      return x;
    }
    return -square(x);
  }
  return kTermFiniteContinuedFraction(getN, getD, k);
}

export function averageDamp(f: (x: number) => number): (x: number) => number {
  return (x: number) => average(x, f(x));
}

export function sqrtWithAverageDump(x: number): number {
  return fixedPoint(
    averageDamp((y) => x / y),
    1,
  );
}

export function derivative(g: (x: number) => number): (x: number) => number {
  const dx = 0.00001;
  return (x: number) => (g(x + dx) - g(x)) / dx;
}

export function newtonsTransform(
  g: (x: number) => number,
): (x: number) => number {
  return (x: number) => x - g(x) / derivative(g)(x);
}

export function newtonsMethod(g: (x: number) => number, guess: number): number {
  return fixedPoint(newtonsTransform(g), guess);
}

export function sqrtWithNewtonsMethod(x: number): number {
  return newtonsMethod((y) => square(y) - x, 1);
}

export function cubic(a: number, b: number, c: number): (x: number) => number {
  return (x) => cube(x) + a * square(x) + b * x + c;
}

export function double(f: (x: number) => number): (x: number) => number {
  return (x: number) => f(f(x));
}

export function inc(x: number): number {
  return x + 1;
}

export function compose(
  f: (x: number) => number,
  g: (x: number) => number,
): (x: number) => number {
  return (x: number) => f(g(x));
}

export function repeated(
  f: (x: number) => number,
  n: number,
): (x: number) => number {
  if (n === 1) {
    return (x) => f(x);
  }
  return compose(f, repeated(f, n - 1));
}

export function smooth(f: (x: number) => number): (x: number) => number {
  const dx = 0.0001;
  return (x: number) => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

export function nFoldSmooth(
  f: (x: number) => number,
  n: number,
): (x: number) => number {
  if (n === 1) {
    return smooth((x) => f(x));
  }
  return smooth(nFoldSmooth(f, n - 1));
}
