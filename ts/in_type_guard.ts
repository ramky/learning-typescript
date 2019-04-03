// Since typescript 2.7, we can use in operator as type guard to narrow a given type

interface Cat {
  meow(): void
}

interface Dog {
  woof(): void
}

function doSomething(obj: Cat | Dog) {
  if ("meow" in obj) {
    obj.meow();
  }
  else {
    (<Dog> obj).woof();
  }
}

