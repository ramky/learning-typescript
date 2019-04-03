// Need to find a good example for this concept
namespace Mappedtypes {
  type Keyify<T> = {
    [P in keyof T]: P;
  };

  function getKeys<T>(obj: T): Keyify<T> {
    const keysArr = Object.keys(obj);
    const stringifyObj = keysArr.reduce((p, c, i, a) => {
      return {
        ...p,
        [c]: c
      };
    }, {});
    return stringifyObj as Keyify<T>;
  }

  interface User {
    name: string;
    age: number;
    address: string;
    website: string;
  }

  let user: User = { name: "Remo", age: 28, address: "1 Main st. New Canaan, CT", website: "http://remo.com" };
  let keys = getKeys<User>(user);

  console.log("keys.name:", keys.name);
  console.log("keys.age:", keys.age);

  // makes all properties optional
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  // allows to pick specific properties
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  }

  type Record<K extends string, T> = {
    [P in K]: T;
  }

  let user1: User = { name: "Remo", age: 28, address: "1 Main st. New Canaan, CT", website: "http://remo.com" };
  user1["name"] = "Gonzalez"
  console.log("user1:", user1)

  let user2: Readonly<User> = { name: "Remo", age: 28, address: "1 Main st. New Canaan, CT", website: "http://remo.com" };
  // user2["name"] = "Gonzalez"
  // cannot assign to name because it is read-only property

  let user3: Partial<User> = { }
  console.log("user3:", user3)

  let user4: Partial<User> = { age: 44, address: "1 Main st. New Canaan, CA" }
  console.log("user4:", user4)
}
