export default {}; // treat this file as a module
let a: string;
a = 'Hello World';
a = 'Hello World2'; // so a has to be let
console.log(a);


export function test({ param } : { param: string }): number {
  return param.length;
}

console.log(test({ param: 'hi' }));
