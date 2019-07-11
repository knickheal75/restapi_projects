const expect = require("expect");

const rewire = require("rewire");

var app = rewire("./app");

describe("App", () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("nikhil", 28);
    expect(spy).toHaveBeenCalledWith("nikhil", 28);
  });

  it("should call saveUser with user object", () => {
    var email = "nikhil@gmail.com";
    var password = "tt12";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
