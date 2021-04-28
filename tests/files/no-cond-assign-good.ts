export default {}; // treat this file as a module
let a = 1;
let x = false;
do {
  a++;
} while ((x = Number.isInteger(a)));
console.log(x);
