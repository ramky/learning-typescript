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
  }

  let user: User = { name: "Remo", age: 28};
  let keys = getKeys<User>(user);

  console.log(keys.name);
  console.log(keys.age);

  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  }

  type Record<K extends string, T> = {
    [P in K]: T;
  }
}
