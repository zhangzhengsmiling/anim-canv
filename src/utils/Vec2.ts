class Vec2 {
  public x: number;
  public y: number
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  static create(x: number, y: number): Vec2 {
    return new Vec2(x, y);
  }
}

export default Vec2;