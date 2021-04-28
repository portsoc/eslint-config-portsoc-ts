export default {}; // treat this file as a module
const a = {};
for (const x in a) {
  // do something
  a[x] = 3;
}
