namespace Geometry {
  export interface Vector2DInterface {
    toArray(callback: (x: number[]) => void): void;
    length(): number;
    normalize(): void;
  }

  export class Vector2D implements Vector2DInterface {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    public toArray(callback: (x: number[]) => void): void {
      callback([this._x, this._y]);
    }

    public length(): number {
      return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    public normalize() {
      let len = 1 / this.length();
      this._x *= len;
      this._y *= len;
    }
  }
}

var vector: Geometry.Vector2DInterface = new Geometry.Vector2D(2, 3);
vector.normalize();
// vector.

vector.toArray( v => console.log(`x: ${v[0]}, y: ${v[1]}`));
vector.normalize
// vector.

