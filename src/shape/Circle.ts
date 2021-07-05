import Vec2 from '../utils/Vec2';
import Shape from './Shape';
import {
  RenderConfig,
  decratorContext2D,
  actionContext2D,
} from '../utils/RenderConfig';

class Circle implements Shape {

  public position: Vec2 = new Vec2(0, 0);
  public radius: number = 0;
  public renderState: Partial<RenderConfig> = {};

  constructor(position: Vec2, radius: number = 0, renderState: Partial<RenderConfig> = {}) {
    this.position = position;
    this.radius = radius;
    this.renderState = renderState;
  }

  render(context2D: CanvasRenderingContext2D) {
    context2D.save();
    decratorContext2D(context2D, this.renderState);
    context2D.beginPath();
    context2D.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context2D.closePath();
    actionContext2D(context2D, this.renderState);
    context2D.restore();
  }

}

export default Circle;
