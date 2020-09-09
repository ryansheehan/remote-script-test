export function helloWorld() {
  console.log('hello world - from remote');
}

function foo() {
  throw new Error('I broke here');
  console.log('foo: bar');
}

export default foo;