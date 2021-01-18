import { expect } from "chai";
import {
  isPerfectSquare,
  isOddDivisorCount,
  isPerfectSquareNumber,
  forLoopIsPerfectSquareNumber,
} from "./PerfectSquareNumber";

describe("For Loop::is Perfect Square Number??", () => {
  it("655923321", () => {
    expect(forLoopIsPerfectSquareNumber(655923321));
  });
});

// describe("perfect square count", () => {
//   it("655923321", () => {
//     expect(console.log(isPerfectSquare(655923321)));
//   });
// });

// describe("is Odd Divisor Count??", () => {
//   it("1 = true", () => {
//     expect(isOddDivisorCount(1)).to.equal(true);
//   });
//   it("2 = false", () => {
//     expect(isOddDivisorCount(2)).to.equal(false);
//   });
//   it("4 = true", () => {
//     expect(isOddDivisorCount(4)).to.equal(true);
//   });
//   it("36864 = true", () => {
//     expect(isOddDivisorCount(36864)).to.equal(true);
//   });
//   it("655923321 = true", () => {
//     expect(isOddDivisorCount(655923321)).to.equal(true);
//   });
// });
