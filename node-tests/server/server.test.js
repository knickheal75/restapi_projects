const request = require("supertest");
const expect = require("expect");

var app = require("./server").app;

it("should return hello world response", done => {
  request(app)
    .get("/")
    .expect(404)
    .expect(res => {
      expect(res.body).toInclude({
        error: "Page not found"
      });
    })
    .end(done);
});

it("should check user information", done => {
  request(app)
    .get("/user")
    .expect(200)
    .expect(res => {
      expect(res.body).toInclude({ name: "nikhil", age: 28 });
    })
    .end(done);
});
