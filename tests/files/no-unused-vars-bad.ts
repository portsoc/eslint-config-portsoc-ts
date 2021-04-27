// c is not used, should complain
function f(a: string, b: string, c: string) {
  console.log({ a, b });
}

console.log(f);
