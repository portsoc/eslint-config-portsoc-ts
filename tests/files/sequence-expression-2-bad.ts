export default {}; // treat this file as a module
function f() { return 1; }
let x;
// the following line uses the comma operator
while ((x = f(), x < 42)) { /* … */ }
