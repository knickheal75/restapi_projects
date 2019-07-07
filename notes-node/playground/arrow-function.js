var square = x => x * x;

console.log(square(5));

var user = {
  name: "nikhil",
  sayHi: () => {
    console.log(`hi  I am ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`hi  I am ${this.name}`);
  }
};

user.sayHiAlt(1, 2);

// es6 arrow the method is bound to global object

// for the normal sayHiAlt() method argumnets of itself are printed
