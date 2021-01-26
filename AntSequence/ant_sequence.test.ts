import { expect } from "chai";
import { ant_sequence } from "./ant_sequence";

describe("Ant Sequence", () => {
  it("111222 -> 1323", () => {
    expect(ant_sequence("111222")).to.equal("1323");
  });
});
