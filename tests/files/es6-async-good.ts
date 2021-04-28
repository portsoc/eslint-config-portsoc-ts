export default {}; // treat this file as a module
async function f() {
  await Promise.resolve('').then(() => undefined);
}
await f();
