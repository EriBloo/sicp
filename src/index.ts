import * as chapterOne from './chapterOne';
import * as chapterTwo from './chapterTwo';

// CHAPTER ONE
(function chapterOneExamples(): void {
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
(function chapterTwoExamples(): void {
  const oneHalf = chapterTwo.makeRational(1, 2);
  const oneThird = chapterTwo.makeRational(1, 3);

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
})();
