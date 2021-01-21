"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nFoldSmooth = exports.smooth = exports.repeated = exports.compose = exports.inc = exports.double = exports.cubic = exports.sqrtWithNewtonsMethod = exports.newtonsMethod = exports.newtonsTransform = exports.derivative = exports.sqrtWithAverageDump = exports.averageDamp = exports.lambertTangent = exports.eulerExpansion = exports.kTermFiniteContinuedFraction = exports.fixedPoint = exports.productOfRelativePrimes = exports.squareOfPrimes = exports.isPrime = exports.smallestDivisor = exports.filteredAccumulate = exports.accumulate = exports.productIter = exports.piWallis = exports.product = exports.sumIter = exports.simpson = exports.integral = exports.sum = exports.gcd = exports.fibonacci = exports.factorial = exports.sqrt = exports.average = exports.cube = exports.square = void 0;
function square(x) {
    return Math.pow(x, 2);
}
exports.square = square;
;
function cube(x) {
    return Math.pow(x, 3);
}
exports.cube = cube;
;
function average(x, y) {
    return (x + y) / 2;
}
exports.average = average;
;
function sqrt(x) {
    function goodEnough(guess) {
        return Math.abs(square(guess) - x) < 0.001;
    }
    ;
    function improve(guess) {
        return average(guess, x / guess);
    }
    ;
    function sqrtIter(guess) {
        if (goodEnough(guess)) {
            return guess;
        }
        else {
            return sqrtIter(improve(guess));
        }
        ;
    }
    ;
    return sqrtIter(1.0);
}
exports.sqrt = sqrt;
;
function factorial(n) {
    function factIter(product, counter) {
        if (counter > n) {
            return product;
        }
        else {
            return factIter(counter * product, counter + 1);
        }
        ;
    }
    ;
    return factIter(1, 1);
}
exports.factorial = factorial;
;
function fibonacci(n) {
    function fibIter(a, b, count) {
        if (count === 1) {
            return b;
        }
        else {
            return fibIter(a + b, a, count - 1);
        }
        ;
    }
    ;
    return fibIter(1, 0, n);
}
exports.fibonacci = fibonacci;
;
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        return gcd(b, a % b);
    }
    ;
}
exports.gcd = gcd;
;
function sum(term, a, next, b) {
    if (a > b) {
        return 0;
    }
    ;
    return term(a) + sum(term, next(a), next, b);
}
exports.sum = sum;
;
function integral(f, a, b, dx) {
    function addDx(x) {
        return x + dx;
    }
    ;
    return (sum(f, a + dx / 2, addDx, b)) * dx;
}
exports.integral = integral;
;
function simpson(f, a, b, n) {
    var h = (b - a) / n;
    var k = 0;
    function next(x) {
        k += 1;
        return x + h;
    }
    function term(x) {
        if (k === 0 || k === n) {
            return f(x);
        }
        ;
        return (2 + (2 * (k % 2))) * f(x);
    }
    ;
    return sum(term, a, next, a + (n + 1) * h) * (h / 3);
}
exports.simpson = simpson;
;
function sumIter(term, a, next, b) {
    function iter(x, result) {
        if (x > b) {
            return result;
        }
        ;
        return iter(next(x), term(x) + result);
    }
    ;
    return iter(a, 0);
}
exports.sumIter = sumIter;
;
function product(term, a, next, b) {
    if (a > b) {
        return 1;
    }
    ;
    return term(a) * product(term, next(a), next, b);
}
exports.product = product;
;
function piWallis() {
    function term(x) {
        return square(2 * x) / (((2 * x) - 1) * ((2 * x) + 1));
    }
    ;
    return product(term, 1, function (x) { return x + 1; }, 1000) * 2;
}
exports.piWallis = piWallis;
;
function productIter(term, a, next, b) {
    function iter(x, result) {
        if (x > b) {
            return result;
        }
        ;
        return iter(next(x), term(x) * result);
    }
    ;
    return iter(a, 1);
}
exports.productIter = productIter;
;
function accumulate(combiner, nullValue, term, a, next, b) {
    if (a > b) {
        return nullValue;
    }
    ;
    return combiner(term(a), accumulate(combiner, nullValue, term, next(a), next, b));
}
exports.accumulate = accumulate;
;
function filteredAccumulate(combiner, filter, nullValue, term, a, next, b) {
    if (a > b) {
        return nullValue;
    }
    ;
    if (filter(a)) {
        return combiner(term(a), filteredAccumulate(combiner, filter, nullValue, term, next(a), next, b));
    }
    ;
    return filteredAccumulate(combiner, filter, nullValue, term, next(a), next, b);
}
exports.filteredAccumulate = filteredAccumulate;
;
function smallestDivisor(n) {
    function findDivisor(n, test) {
        if (square(test) > n) {
            return n;
        }
        else if (n % test === 0) {
            return test;
        }
        return findDivisor(n, test + 1);
    }
    ;
    return findDivisor(n, 2);
}
exports.smallestDivisor = smallestDivisor;
;
function isPrime(n) {
    return smallestDivisor(n) === n;
}
exports.isPrime = isPrime;
;
function squareOfPrimes(start, end) {
    return filteredAccumulate(function (x, y) { return x + y; }, isPrime, 0, square, start, function (x) { return x + 1; }, end);
}
exports.squareOfPrimes = squareOfPrimes;
;
function productOfRelativePrimes(end) {
    function isRelativePrime(test) {
        return gcd(test, end) === 1;
    }
    ;
    return filteredAccumulate(function (x, y) { return x * y; }, isRelativePrime, 1, function (x) { return x; }, 2, function (x) { return x + 1; }, end);
}
exports.productOfRelativePrimes = productOfRelativePrimes;
;
function fixedPoint(f, firstGuess) {
    var tolerance = 0.00001;
    function closeEnough(a, b) {
        return Math.abs(a - b) < tolerance;
    }
    function tryGuess(guess) {
        var next = f(guess);
        if (closeEnough(guess, next)) {
            return next;
        }
        ;
        return tryGuess(next);
    }
    ;
    return tryGuess(firstGuess);
}
exports.fixedPoint = fixedPoint;
;
function kTermFiniteContinuedFraction(n, d, k) {
    function iter(x) {
        if (k === x) {
            return n(x) / d(x);
        }
        ;
        return n(x) / (d(x) + iter(x + 1));
    }
    ;
    return iter(1);
}
exports.kTermFiniteContinuedFraction = kTermFiniteContinuedFraction;
;
function eulerExpansion(k) {
    function getD(d) {
        if ((d - 2) % 3 === 0) {
            return 2 + 2 * (d - 2) / 3;
        }
        return 1;
    }
    ;
    return kTermFiniteContinuedFraction(function (x) { return 1; }, getD, k) + 2;
}
exports.eulerExpansion = eulerExpansion;
;
function lambertTangent(x, k) {
    function getD(d) {
        return 2 * d - 1;
    }
    ;
    function getN(n) {
        if (n === 1) {
            return x;
        }
        ;
        return -square(x);
    }
    ;
    return kTermFiniteContinuedFraction(getN, getD, k);
}
exports.lambertTangent = lambertTangent;
;
function averageDamp(f) {
    return function (x) { return average(x, f(x)); };
}
exports.averageDamp = averageDamp;
;
function sqrtWithAverageDump(x) {
    return fixedPoint(averageDamp(function (y) { return x / y; }), 1);
}
exports.sqrtWithAverageDump = sqrtWithAverageDump;
;
function derivative(g) {
    var dx = 0.00001;
    return function (x) { return (g(x + dx) - g(x)) / dx; };
}
exports.derivative = derivative;
;
function newtonsTransform(g) {
    return function (x) { return x - (g(x) / derivative(g)(x)); };
}
exports.newtonsTransform = newtonsTransform;
;
function newtonsMethod(g, guess) {
    return fixedPoint(newtonsTransform(g), guess);
}
exports.newtonsMethod = newtonsMethod;
;
function sqrtWithNewtonsMethod(x) {
    return newtonsMethod(function (y) { return square(y) - x; }, 1);
}
exports.sqrtWithNewtonsMethod = sqrtWithNewtonsMethod;
;
function cubic(a, b, c) {
    return function (x) { return cube(x) + (a * square(x)) + (b * x) + c; };
}
exports.cubic = cubic;
;
function double(f) {
    return function (x) { return f(f(x)); };
}
exports.double = double;
;
function inc(x) {
    return x + 1;
}
exports.inc = inc;
;
function compose(f, g) {
    return function (x) { return f(g(x)); };
}
exports.compose = compose;
;
function repeated(f, n) {
    if (n === 1) {
        return function (x) { return f(x); };
    }
    ;
    return compose(f, repeated(f, n - 1));
}
exports.repeated = repeated;
;
function smooth(f) {
    var dx = 0.0001;
    return function (x) { return (f(x - dx) + f(x) + f(x + dx)) / 3; };
}
exports.smooth = smooth;
;
function nFoldSmooth(f, n) {
    if (n === 1) {
        return smooth(function (x) { return f(x); });
    }
    ;
    return smooth(nFoldSmooth(f, n - 1));
}
exports.nFoldSmooth = nFoldSmooth;
;
