export type Test1 = {
  a: string;
  b: number,
};

type Test2 = {a: string};

declare function test1(a: Test1): void;
declare function test2(a: Test2): void;
console.log({ test1, test2 });
