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

    test("doesn't change enhancement if === 20", () => {
      const newItem = { name: "sahar", durability: 45, enhancement: 20 };
      const succeeded = enhancer.success(newItem);
      expect(succeeded).toMatchObject(newItem);
    });
  });

  describe("fail", () => {
    const smallEnhancement = {
      name: "sahar",
      durability: 45,
      enhancement: 14,
    };
    const bigEnhancement = { name: "sahar", durability: 45, enhancement: 19 };

    test("enhancement doesn't change when < 15", () => {
      expect(enhancer.fail(smallEnhancement)).toHaveProperty(
        "enhancement",
        smallEnhancement.enhancement
      );
    });
    test("durability changes as expected", () => {
      expect(enhancer.fail(smallEnhancement)).toHaveProperty("durability", 40);
      expect(enhancer.fail(bigEnhancement)).toHaveProperty("durability", 35);
    });

    test("enhancement should change when > 16", () => {
      expect(enhancer.fail(bigEnhancement)).toHaveProperty("enhancement", 18);
    });
    test("should not change the rest of the item object", () => {
      expect(enhancer.fail(bigEnhancement)).toMatchObject({
        name: "sahar",
      });
    });
  });

  describe("get", () => {
    test("should not change name when enhancement is 0", () => {
      const zeroEnhance = { name: "sahar", durability: 45, enhancement: 0 };
      expect(enhancer.get(zeroEnhance)).toMatchObject(zeroEnhance);
    });

    test("should add enhancement to the name", () => {
      expect(enhancer.get(item)).toHaveProperty("name", "[+16] sahar");
    });

    test("should not change the rest of the item object", () => {
      expect(enhancer.get(item)).toMatchObject({
        durability: 45,
        enhancement: 16,
      });
    });
  });
});
