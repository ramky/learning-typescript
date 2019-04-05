function add(foo: number, bar?: number, baz?: number) {
  let total = foo
  if (bar != undefined) {
    total += bar
  }

  if (baz != undefined) {
    total += baz
  }

  return total;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
