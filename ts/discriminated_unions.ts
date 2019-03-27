interface Cube {
  kind: "cube"
  size: number
}

interface Pyramid {
  kind: "pyramid"
  width: number
  length: number
  height: number
}

interface Sphere {
  kind: "sphere"
  radius: number
}

type Shape = Cube | Pyramid | Sphere

function volume(shape: Shape) {
  switch(shape.kind) {
    case "cube":
      return shape.size ** 3
    case "pyramid":
      return (shape.width * shape.height * shape.length) / 3
    case "sphere":
      const PI = Math.PI
      return (4 / 3) * PI * (shape.radius ** 3)
  }
}

var cube: Cube = {kind: "cube", size: 2}
var pyramid: Pyramid = {kind: "pyramid", width: 2, length: 3, height: 4}
var sphere: Sphere = {kind: "sphere", radius: 3}

console.log(volume(cube));
console.log(volume(pyramid));
console.log(volume(sphere));

