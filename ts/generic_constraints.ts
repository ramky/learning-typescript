interface Comparable<T> {
  equals(value: T): boolean
}

function isEqual<TVal, T extends Comparable<TVal>>(comparable: T, value: TVal) {
  return comparable.equals(value);
}

interface RectangleInterface {
  width: number
  height: number
}

type ComparableRectangle = RectangleInterface & Comparable<RectangleInterface>

class Rectangle implements ComparableRectangle {
  public height: number
  public width: number

  public constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  public equals(value: Rectangle) {
    return value.width === this.width && value.height === this.height
  }
}

const rectangle = new Rectangle(5, 8)
const is_equal = isEqual<RectangleInterface, ComparableRectangle>(rectangle, { width: 5, height: 8 })
console.log(is_equal)
