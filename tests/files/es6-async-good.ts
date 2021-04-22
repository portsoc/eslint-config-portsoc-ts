async function f() {
  await Promise.resolve('').then(() => undefined);
}
f();
