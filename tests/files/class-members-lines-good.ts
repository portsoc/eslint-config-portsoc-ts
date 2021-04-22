class EslintTests {
  const x = 1;
  f() {
    console.log('Hello');
  }

  g() {
    console.log('Goodbye');
  }
}

const a = new EslintTests();
a.f();
