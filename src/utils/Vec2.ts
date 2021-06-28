import Math2D from "./Math2D";

class Vec2 {
  public x: number;
  public y: number
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static create(x: number = 0, y: number = 0): Vec2 {
    return new Vec2(x, y);
  }

  public add(vec: Vec2): Vec2 {
    return Math2D.vectorAdd(this, vec, this);
  }

  public substract(vec: Vec2): Vec2 {
    return Math2D.vectorSubstract(this, vec, this);
  }

  public dotProduct(scalar: number): Vec2 {
    return Math2D.dotProduct(this, scalar, this)
  }

  public get length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y
    );
  }

  public normalize() {
    const len = this.length;
    this.x = this.x / len;
    this.y = this.y / len;
  }

  public toString() {
    return `[${this.x}, ${this.y}]`;
  }

}

export default Vec2;
