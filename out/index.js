"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chapterTwo = __importStar(require("./chapterTwo"));
// CHAPTER ONE
(function chapterOneExamples() {
    // console.log(
    //   chapterOne.integral(chapterOne.cube, 0, 1, 0.001),
    // );
    // console.log(
    //   chapterOne.simpson(chapterOne.cube, 0, 1, 1000),
    // );
    // console.log(
    //   chapterOne.product(chapterOne.square, 1, (x) => x + 1, 6),
    // );
    // console.log(
    //   chapterOne.piWallis(),
    // );
    // console.log(
    //   chapterOne.accumulate((x, y) => x * y, 1, chapterOne.cube, 1, (x) => x + 1, 5),
    // );
    // console.log(
    //   chapterOne.filteredAccumulate((x, y) => x + y, (x) => x > 4, 0, (x) => x, 1, (x) => x + 1, 10),
    // );
    // console.log(
    //   chapterOne.squareOfPrimes(2, 100),
    // );
    // console.log(
    //   chapterOne.productOfRelativePrimes(30),
    // );
    // console.log(
    //   chapterOne.fixedPoint((x) => Math.cos(x), 1),
    // );
    // console.log(
    //   chapterOne.fixedPoint((x) => Math.sin(x) + Math.cos(x), 1),
    // );
    // console.log(
    //   chapterOne.fixedPoint((x) => 1 + (1 / x), 1),
    // );
    // console.log(
    //   chapterOne.kTermFiniteContinuedFraction((x) => 1, (x) => 1, 12),
    // );
    // console.log(
    //   chapterOne.eulerExpansion(100),
    // );
    // console.log(
    //   chapterOne.lambertTangent(20, 100),
    // );
    // console.log(
    //   chapterOne.averageDamp(chapterOne.square)(10),
    // );
    // console.log(
    //   chapterOne.sqrtWithAverageDump(4),
    // );
    // console.log(
    //   chapterOne.derivative(chapterOne.cube)(5),
    // );
    // console.log(
    //   chapterOne.sqrtWithNewtonsMethod(4),
    // );
    // console.log(
    //   chapterOne.newtonsMethod(chapterOne.cubic(6, 4, 2), 1),
    // );
    // console.log(
    //   chapterOne.double(chapterOne.inc)(2),
    // );
    // console.log(
    //   chapterOne.double(chapterOne.double(chapterOne.double(chapterOne.inc)))(5),
    // );
    // console.log(
    //   chapterOne.compose(chapterOne.square, chapterOne.inc)(6),
    // );
    // console.log(
    //   chapterOne.repeated(chapterOne.square, 2)(5),
    // );
    // console.log(
    //   chapterOne.repeated(chapterOne.inc, 8)(5),
    // );
    // console.log(
    //   chapterOne.smooth(chapterOne.cubic(6, 4, 2))(3),
    // );
    // console.log(
    //   chapterOne.nFoldSmooth(chapterOne.square, 2)(3),
    // );
})();
// CHAPTER TWO
(function chapterTwoExamples() {
    var oneHalf = chapterTwo.makeRational(1, 2);
    var oneThird = chapterTwo.makeRational(1, 3);
    var consValue = chapterTwo.cons(6, 4);
    // chapterTwo.printRational(
    //   oneHalf,
    // );
    // chapterTwo.printRational(
    //   oneThird,
    // );
    // chapterTwo.printRational(
    //   chapterTwo.addRational(oneHalf, oneThird),
    // );
    // chapterTwo.printRational(
    //   chapterTwo.addRational(oneThird, oneThird),
    // );
    // chapterTwo.printRational(
    //   chapterTwo.mulRational(oneThird, oneHalf),
    // );
    // chapterTwo.printRational(
    //   chapterTwo.subRational(oneThird, oneHalf),
    // );
    // chapterTwo.printPoint(
    //   chapterTwo.midpointSegment(
    //     chapterTwo.makeSegment(
    //       chapterTwo.makePoint(1, 1),
    //       chapterTwo.makePoint(5, 3),
    //     ),
    //   ),
    // );
    // chapterTwo.printPoint(
    //   chapterTwo.midpointSegment(
    //     chapterTwo.makeSegment(
    //       chapterTwo.makePoint(-1, -1),
    //       chapterTwo.makePoint(-5, -5),
    //     ),
    //   ),
    // );
    // console.log(
    //   chapterTwo.perimeter(
    //     chapterTwo.makeRectangle(
    //       chapterTwo.makePoint(1, 1),
    //       chapterTwo.makePoint(3, 3),
    //     ),
    //   ),
    // );
    // console.log(
    //   chapterTwo.area(
    //     chapterTwo.makeRectangle(
    //       chapterTwo.makePoint(1, 1),
    //       chapterTwo.makePoint(3, 3),
    //     ),
    //   ),
    // );
    // console.log(chapterTwo.cdr(consValue));
    // console.log(chapterTwo.carWithProduct(chapterTwo.consWithProduct(33, 12)));
    // console.log(chapterTwo.zero((x: any) => x + 1)(0));
    // console.log(
    //   chapterTwo.next(chapterTwo.next(chapterTwo.zero))((x: any) => x + 1)(0),
    // );
    // console.log(chapterTwo.one((x: any) => x + 1)(0));
    // console.log(chapterTwo.two((x: any) => x + 1)(0));
    // console.log(
    //   chapterTwo.add(chapterTwo.two, chapterTwo.one)((x: any) => x + 1)(0),
    // );
    // console.log(chapterTwo.makeCenterWidth(10, 1));
    // console.log(chapterTwo.makeCenterPercent(10, 10));
    // console.log(chapterTwo.percent(chapterTwo.makeCenterWidth(10, 1)));
    chapterTwo.printList(chapterTwo.list(1, 2, 3, 4));
})();
