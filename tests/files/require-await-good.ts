export default {}; // treat this file as a module
// inside an async function, we should await
async function foo() {
  await Promise.resolve('').then(() => undefined);
}

console.log(foo);
