const ffi = require("ffi-napi");
const path = require("path");

const lib = ffi.Library(
  path.join(__dirname, "../rust/target/release/libfibonacci"),
  {
    fibonacci: ["int", ["int"]],
  },
);

const num = lib.fibonacci(20);
console.log("Fibonacci of 20 is " + num);
