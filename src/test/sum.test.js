const degrement = require("../components/sum");

test("Degremente 2 - 1 to equal 1", () => {
  expect(degrement(2, 1)).toBe(1);
});
