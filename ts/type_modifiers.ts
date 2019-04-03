namespace TypeModifiers {
  interface User {
    name: string;
    age: number;
    address: string;
    website: string;
  }

  // partial means all optional
  type ReadonlyAndPartial<T> = {
    +readonly [P in keyof T]?: T[P]
  }

  type MutableAndPartial<T> = {
    -readonly [P in keyof T]?: T[P]
  }

  type Required<T> = {
    [P in keyof T]-?: T[P]
  }

  let user1: User = { name: "Remo", age: 28, address: "1 Main St. New York City, NY", website: "http://remo.com" };
  console.log("user1:", user1)

  let user2: ReadonlyAndPartial<User> = { }
  // user2["name"] = "Gonzales"
  console.log("user2:", user2)

  let user3: MutableAndPartial<User> =  { name: "Remo" }
  user3["name"] = "Gonzales"
  console.log("user3:", user3)

  // let user4: Required<User> =  { name: "Remo" }
  let user4: Required<User> =  user1
  console.log("user4:", user4)
}
