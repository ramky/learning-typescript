namespace Generics {
  function deserialize<T>(json: string): T {
    return JSON.parse(json)as T;
  }

  interface User {
    name: string
    age: number
  }

  let user = deserialize<User>(`{"name": "Remo", "age": 28}`)
  console.log("user:", user);

  interface Rectangle {
    width: number
    height: number
  }

  let rectangle = deserialize<Rectangle>(`{"width": 3, "height": 4}`)
  console.log("rectangle:", rectangle);
}
