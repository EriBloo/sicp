"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percent = exports.makeCenterPercent = exports.width = exports.center = exports.makeCenterWidth = exports.subInterval = exports.divInterval = exports.mulInterval = exports.addInterval = exports.lowerBound = exports.upperBound = exports.makeInterval = exports.add = exports.two = exports.one = exports.next = exports.zero = exports.cdrWithProduct = exports.carWithProduct = exports.zeroRemainderDivisions = exports.consWithProduct = exports.cdr = exports.car = exports.cons = exports.area = exports.perimeter = exports.segmentLength = exports.makeRectangle = exports.printPoint = exports.midpointSegment = exports.makeSegment = exports.makePoint = exports.printRational = exports.equalRational = exports.divRational = exports.mulRational = exports.subRational = exports.addRational = exports.makeRational = void 0;
var chapterOne_1 = require("./chapterOne");
function makeRational(n, d) {
    if (d === 0 && n !== 0) {
        throw new Error("Can't divide by 0.");
    }
    var neg = n < 0 !== d < 0;
    var g = chapterOne_1.gcd(n, d);
    return {
        numer: (neg ? -1 : 1) * Math.abs(n / g),
        denom: Math.abs(d / g),
    };
}
exports.makeRational = makeRational;
function addRational(x, y) {
    return makeRational(x.numer * y.denom + y.numer * x.denom, x.denom * y.denom);
}
exports.addRational = addRational;
function subRational(x, y) {
    return makeRational(x.numer * y.denom - y.numer * x.denom, x.denom * y.denom);
}
exports.subRational = subRational;
function mulRational(x, y) {
    return makeRational(x.numer * y.numer, x.denom * y.denom);
}
exports.mulRational = mulRational;
function divRational(x, y) {
    return makeRational(x.numer * y.denom, x.denom * y.numer);
}
exports.divRational = divRational;
function equalRational(x, y) {
    return x.numer * y.denom === x.denom * y.numer;
}
exports.equalRational = equalRational;
function printRational(r) {
    console.log(r.numer + "/" + r.denom);
}
exports.printRational = printRational;
function makePoint(x, y) {
    return { x: x, y: y };
}
exports.makePoint = makePoint;
function makeSegment(start, end) {
    return { start: start, end: end };
}
exports.makeSegment = makeSegment;
function midpointSegment(s) {
    return {
        x: (s.end.x + s.start.x) / 2,
        y: (s.end.y + s.start.y) / 2,
    };
}
exports.midpointSegment = midpointSegment;
function printPoint(p) {
    console.log("(" + p.x + ", " + p.y + ")");
}
exports.printPoint = printPoint;
function makeRectangle(start, end) {
    return {
        a: start,
        b: makePoint(start.x, end.y),
        c: end,
        d: makePoint(end.x, start.y),
    };
}
exports.makeRectangle = makeRectangle;
function segmentLength(s) {
    return Math.sqrt(Math.pow(s.end.x - s.start.x, 2) + Math.pow(s.end.y - s.start.y, 2));
}
exports.segmentLength = segmentLength;
function perimeter(r) {
    return (2 * segmentLength(makeSegment(r.a, r.b)) +
        2 * segmentLength(makeSegment(r.a, r.d)));
}
exports.perimeter = perimeter;
function area(r) {
    return (segmentLength(makeSegment(r.a, r.b)) * segmentLength(makeSegment(r.a, r.d)));
}
exports.area = area;
function cons(x, y) {
    function dispatch(m) {
        if (m === 0) {
            return x;
        }
        else if (m === 1) {
            return y;
        }
        else {
            throw new Error('Argument must be 0 or 1');
        }
    }
    return dispatch;
}
exports.cons = cons;
function car(z) {
    return z(0);
}
exports.car = car;
function cdr(z) {
    return z(1);
}
exports.cdr = cdr;
function consWithProduct(x, y) {
    return Math.pow(2, x) * Math.pow(3, y);
}
exports.consWithProduct = consWithProduct;
function zeroRemainderDivisions(a, b, n) {
    if (n === void 0) { n = 0; }
    if (a % b === 0) {
        return zeroRemainderDivisions(a / b, b, n + 1);
    }
    return n;
}
exports.zeroRemainderDivisions = zeroRemainderDivisions;
function carWithProduct(z) {
    return zeroRemainderDivisions(z, 2);
}
exports.carWithProduct = carWithProduct;
function cdrWithProduct(z) {
    return zeroRemainderDivisions(z, 3);
}
exports.cdrWithProduct = cdrWithProduct;
var zero = function (f) { return function (x) { return x; }; };
exports.zero = zero;
function next(n) {
    return function (f) { return function (x) { return f(n(f)(x)); }; };
}
exports.next = next;
var one = function (f) { return function (x) { return f((function (f) { return function (x) { return x; }; })(f)(x)); }; };
exports.one = one;
var two = function (f) { return function (x) {
    return f((function (f) { return function (x) { return f((function (f) { return function (x) { return x; }; })(f)(x)); }; })(f)(x));
}; };
exports.two = two;
function add(n, m) {
    return function (f) { return function (x) { return n(f)(m(f)(x)); }; };
}
exports.add = add;
function makeInterval(a, b) {
    if (a < b) {
        return { lower: a, upper: b };
    }
    return { lower: b, upper: a };
}
exports.makeInterval = makeInterval;
function upperBound(i) {
    return i.upper;
}
exports.upperBound = upperBound;
function lowerBound(i) {
    return i.lower;
}
exports.lowerBound = lowerBound;
function addInterval(x, y) {
    return makeInterval(lowerBound(x) + lowerBound(y), upperBound(x) + upperBound(y));
}
exports.addInterval = addInterval;
function mulInterval(x, y) {
    var p1 = lowerBound(x) * lowerBound(y);
    var p2 = lowerBound(x) * upperBound(y);
    var p3 = upperBound(x) * lowerBound(y);
    var p4 = upperBound(x) * upperBound(y);
    return makeInterval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4));
}
exports.mulInterval = mulInterval;
function divInterval(x, y) {
    if (lowerBound(y) * upperBound(y) <= 0) {
        throw new Error('Interval spans 0.');
    }
    return mulInterval(x, makeInterval(1 / upperBound(y), 1 / lowerBound(y)));
}
exports.divInterval = divInterval;
function subInterval(x, y) {
    return makeInterval(lowerBound(x) - upperBound(y), upperBound(x) - lowerBound(y));
}
exports.subInterval = subInterval;
function makeCenterWidth(c, w) {
    return makeInterval(c - w, c + w);
}
exports.makeCenterWidth = makeCenterWidth;
function center(i) {
    return (lowerBound(i) + upperBound(i)) / 2;
}
exports.center = center;
function width(i) {
    return (upperBound(i) - lowerBound(i)) / 2;
}
exports.width = width;
function makeCenterPercent(c, p) {
    return makeCenterWidth(c, (p / 100) * c);
}
exports.makeCenterPercent = makeCenterPercent;
function percent(i) {
    return (width(i) / center(i)) * 100;
}
exports.percent = percent;
