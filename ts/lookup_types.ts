namespace Lookuptypes {
  function filterByProperty<T, K extends keyof T>(property: K, entities: T[], value: T[K]) {
    return entities.filter(e => e[property] === value);
  }

  interface User {
    surname: string;
    age: number
  }

  const users = [
    {surname: "Smith", age: 28},
    {surname: "Johnson", age: 55},
    {surname: "Williams", age: 24},
  ];

  // T is the type of items in the array passed as the first argument of the fn
  // K is the name of the property of T.
  console.log(filterByProperty<User, "age">("age", users, 55));
  console.log(filterByProperty<User, "surname">("surname", users, "Smith"));
}
