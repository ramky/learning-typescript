// optional arguments
function add(foo: number, bar?: number, baz?: number) {
  let total = foo
  if (bar != undefined) { total += bar }
  if (baz != undefined) { total += baz }

  return total;
}

// default arguments
function multiply(foo: number, bar?: number, baz: number = 2) {
  let product = foo
  if (bar!= undefined) { product *= bar }
  product *= baz

  return product;
}

// rest parameters
function add_with_rest(...foo: number[]){
  let total = 0
  for(let num of foo) { total += num }

  return total
}

console.log("add with optional arguments: ")
console.log(add(1))
console.log(add(1, 2))
console.log(add(1, 2, 3))

console.log("multiply with default arguments: ")
console.log(multiply(5));
console.log(multiply(5, 6));
console.log(multiply(5, 6, 7));

console.log("add with rest parameters: ")
console.log(add_with_rest(2))
console.log(add_with_rest(2, 2))
console.log(add_with_rest(2, 2, 2))
console.log(add_with_rest(2, 2, 2, 2))
