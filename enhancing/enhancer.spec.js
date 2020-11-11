const enhancer = require("./enhancer.js");
// test away!
describe("Sanity check", () => {
  it("works", () => {
    expect(2 + 2).toEqual(4);
  });
});

describe("Enhancer", () => {
  const item = { name: "sahar", durability: 45, enhancement: 16 };

  describe("repair", () => {
    test("returns durability of 100", () => {
      expect(enhancer.repair(item)).toHaveProperty("durability", 100);
    });

    test("returns the rest of item object unchanged", () => {
      expect(enhancer.repair(item)).toMatchObject({
        name: "sahar",
        enhancement: 16,
      });
    });
  });

  describe("success", () => {
    test("returns updated enhancement", () => {
      const succeeded = enhancer.success(item);
      expect(succeeded).toHaveProperty("enhancement", 17);
      expect(succeeded).toMatchObject({
        name: "sahar",
        durability: 45,
      });
    });
  });
});
