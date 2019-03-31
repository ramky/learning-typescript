type CardinalDirection =
  "North" | "East" | "South" | "West";

function move (distance: number, direction: CardinalDirection) {
  console.log(`Moving ${distance} ${direction}`);
}

move(1, "North")
move(2, "East")

// A weak type is an object literal type in which all properties are optional

interface User {
  name?: string;
  age?: number;
}

let user1: User = { name: "Remo", age: 28 };
// let user2: User = { firstName: "Remo", age: 28 };

// Local types

interface Person {
  name: string
  age: number
}

function makePerson(name: string, age: number) {
  class Person implements Person {
    constructor(
      public name: string,
      public age: number
    ){}
  }
  return new Person(name, age);
}

let user = makePerson("Remo", 28);


// Typecasting

type TypeA = "Lorem" | "Ipsum"
var myObject: TypeA
var otherObject: any
myObject = <TypeA> otherObject
myObject = otherObject as TypeA
