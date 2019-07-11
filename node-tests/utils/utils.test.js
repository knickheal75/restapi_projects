const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var result = utils.add(33, 11);

      expect(result)
        .toBe(44)
        .toBeA("number");

      //   if (result !== 44) {
      //     throw new Error(`Expected 44 but got ${result}`);
      //   }
    });
  });

  it("should async add 2 numbers", done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .toBe(7)
        .toBeA("number");
      done();
    });
  });

  it("should generate square of a number", () => {
    var square = utils.square(10);

    //   if (square !== 100) {
    //     throw new Error(`Expected 100 but got ${square}`);
    //   }
    expect(square)
      .toBe(100)
      .toBeA("number");
  });

  it("should async square number", done => {
    utils.asyncSquare(3, square => {
      expect(square)
        .toBe(9)
        .toBeA("number");
      done();
    });
  });
});

// it("should expect some values", () => {
//   //   expect(12).toNotBe(12);
//   //   expect({ name: "nikhil" }).toEqual({ name: "nikhil" });
//   //   expect([2, 3, 4]).toInclude(2);
//   expect({ name: "nikhil", age: 28, location: "pune" }).toInclude({ age: 28 });
// });

it("should verify first and last names", () => {
  var user = {
    location: "pune",
    age: 28
  };

  var res = utils.setName(user, "nikhil mind");

  //   expect(user).toEqual(res);
  expect(user).toInclude({ firstName: "nikhil", lastName: "mind" });
});
