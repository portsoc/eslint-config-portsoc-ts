export default {}; // treat this file as a module
function foobar(foo: (x: string) =>boolean, bar: string) {
  return foo(bar);
}

function isBar(x: string) {
  return x === 'bar';
}

foobar(isBar, 'bar');
