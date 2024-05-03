import { product } from "../app/BasicUtils";

// describe("BasicUtils test suite", () => {
//   it("return the product of 3 and 2", () => {
//     const actual = product(3, 2);
//     expect(actual).toBe(6);
//   });
// });

//? AAA format
describe("BasicUtils test suite", () => {
  it("return the product of 3 and 2", () => {
    // arrange
    const sut = product;

    //acting
    const actual = sut(3, 2);

    // asserting
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(9);
    expect(actual).toBeGreaterThan(5);
  });
});

// testing
