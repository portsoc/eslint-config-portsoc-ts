export default {}; // treat this file as a module
console.log(function () { return ''; });
console.log(function f () { return ''; });
console.log(async () => { await Promise.resolve('').then(() => undefined); });
console.log(() => { return ''; });
