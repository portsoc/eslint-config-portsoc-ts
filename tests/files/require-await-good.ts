// inside an async function, we should await
async function foo() {
  await Promise.resolve('').then(() => undefined);
}

console.log(foo);
