import Vec2 from '../utils/Vec2';
import IShape from './Shape';
import {
  RenderConfig,
  decratorContext2D,
  actionContext2D,
} from '../utils/RenderConfig';

class Rectangle implements IShape {

  public position: Vec2 = new Vec2(0, 0);
  public width: number = 0;
  public height: number = 0;
  public renderState: Partial<RenderConfig> = {};

  constructor(
    position: Vec2,
    width: number = 0,
    height: number = 0,
    renderState: Partial<RenderConfig> = {}
  ) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.renderState = renderState;
  }
  
  render(context2D: CanvasRenderingContext2D) {
    context2D.save();
    decratorContext2D(context2D, this.renderState);
    context2D.beginPath();
    context2D.rect(this.position.x, this.position.y, this.width, this.height);
    context2D.closePath();
    actionContext2D(context2D, this.renderState);
    context2D.restore();
  }

}

export default Rectangle;
