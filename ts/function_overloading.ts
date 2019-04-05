function test(name: string): string
function test(age: number): string
function test(single: boolean): string
function test(value: (string|number|boolean)): string {
  switch(typeof value) {
    case "string":
      return `My name is ${value}`;
    case "number":
      return `I am ${value} years old`;
    case "boolean":
      return value ? "I am single" : "I'm not single";
    default:
      return "Invalid argument";
  }
}

console.log(test("Remo"));
console.log(test(26));
console.log(test(false));
