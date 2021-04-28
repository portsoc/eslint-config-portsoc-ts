export default {}; // treat this file as a module
class Example {
  constructor() {
    console.log();
  }
  // there should be a line between class members
  method() {
    console.log();
  }
}

console.log((new Example()).theAnswer);
