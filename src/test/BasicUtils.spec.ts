import { authenticateUser, product } from "../app/BasicUtils";

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

  //? User Authenticate Test Suite
  describe.only("Authenticate test suite", () => {
    it("return the lower case of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.usernameToLower).toBe("developer");
    });
    it("return the username character of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.usernameCharacter).toEqual([
        "d",
        "e",
        "v",
        "e",
        "L",
        "O",
        "P",
        "E",
        "R",
      ]);
    });
  });

  it("User authenticate", () => {
    const sut = authenticateUser;
    const actual = sut("deveLOPER", "dev");
    expect(actual.usernameToLower).toBe("developer");

    // arrays
    expect(actual.usernameCharacter).toEqual([
      "d",
      "e",
      "v",
      "e",
      "L",
      "O",
      "P",
      "E",
      "R",
    ]);
  });
});

// testing
