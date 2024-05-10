import {
  authenticateUser,
  product,
  UsernameToLowerCase,
} from "../app/BasicUtils";

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

  it.each([
    [2, 4, 8],
    [3, 4, 12],
    [4, 0, 0],
    [2, 1, 2],
  ])(
    "test!! should return the product of %i and %i as %i",
    (a, b, expected) => {
      const actual = product(a, b);
      expect(actual).toEqual(expected);
    }
  );

  //? User Authenticate Test Suite
  describe("Authenticate test suite", () => {
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
    it("return the misc username character of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.usernameToLower).toBe("developer");
      // arrays
      expect(actual.usernameCharacter).toEqual(
        expect.arrayContaining(["L", "O", "P", "E", "R", "d", "e", "v", "e"])
      );
    });
    it("return user details of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.userDetails).toEqual({});
    });
    it("return user details of a valid user", () => {
      const sut = authenticateUser;
      const actual = sut("deveLOPER", "dev");
      expect(actual.userDetails).toBeDefined();
      expect(actual.userDetails).not.toBeUndefined;
    });
  });
  describe("usernameToLowerCase test suite", () => {
    //setup
    let sut: UsernameToLowerCase;
    beforeEach(() => {
      console.log("setup from here");
      sut = new UsernameToLowerCase();
    });
    it("return the lower case of a valid username", () => {
      const actual = sut.toLower("Jack");
      console.log("i am the main test");

      expect(actual).toBe("jack");
    });
    it("throws an error for an invalid username", () => {
      expect(() => sut.toLower("")).toThrow();
    });
  });
});

// testing
