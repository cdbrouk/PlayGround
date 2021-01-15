import { expect } from "chai";
import { createPostNoation } from "./PostfixNotation";

describe("postfix notation", () => {
  it("A+B+C => AB+C+", () => {
    expect(createPostNoation("A+B+C")).to.equal("AB+C+");
  });

  it("A+B*C+(D*E+F)*G => ABC*+DE*F+G*+", () => {
    expect(createPostNoation("A+B*C+(D*E+F)*G")).to.equal("ABC*+DE*F+G*+");
  });

  it("A+B*(C-D)/E => ABCD-*E/+", () => {
    expect(createPostNoation("A+B*(C-D)/E")).to.equal("ABCD-*E/+");
  });
});
