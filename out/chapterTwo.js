"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPoint = exports.midpointSegment = exports.makeSegment = exports.makePoint = exports.printRational = exports.equalRational = exports.divRational = exports.mulRational = exports.subRational = exports.addRational = exports.makeRational = void 0;
var chapterOne_1 = require("./chapterOne");
function makeRational(n, d) {
    if (d === 0 && n !== 0) {
        throw new Error("Can't divide by 0.");
    }
    ;
    var neg = (n < 0 !== d < 0);
    var g = chapterOne_1.gcd(n, d);
    return {
        numer: (neg ? -1 : 1) * Math.abs(n / g),
        denom: Math.abs(d / g),
    };
}
exports.makeRational = makeRational;
;
function addRational(x, y) {
    return makeRational(x.numer * y.denom + y.numer * x.denom, x.denom * y.denom);
}
exports.addRational = addRational;
;
function subRational(x, y) {
    return makeRational(x.numer * y.denom - y.numer * x.denom, x.denom * y.denom);
}
exports.subRational = subRational;
;
function mulRational(x, y) {
    return makeRational(x.numer * y.numer, x.denom * y.denom);
}
exports.mulRational = mulRational;
;
function divRational(x, y) {
    return makeRational(x.numer * y.denom, x.denom * y.numer);
}
exports.divRational = divRational;
;
function equalRational(x, y) {
    return x.numer * y.denom === x.denom * y.numer;
}
exports.equalRational = equalRational;
;
function printRational(r) {
    console.log(r.numer + "/" + r.denom);
}
exports.printRational = printRational;
;
function makePoint(x, y) {
    return { x: x, y: y };
}
exports.makePoint = makePoint;
;
function makeSegment(start, end) {
    return { start: start, end: end };
}
exports.makeSegment = makeSegment;
;
function midpointSegment(s) {
    return {
        x: (s.end.x - s.start.x) / 2,
        y: (s.end.y - s.start.y) / 2,
    };
}
exports.midpointSegment = midpointSegment;
;
function printPoint(p) {
    console.log("(" + p.x + ", " + p.y + ")");
}
exports.printPoint = printPoint;
;
