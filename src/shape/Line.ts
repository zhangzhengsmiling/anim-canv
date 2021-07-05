
import { actionContext2D, decratorContext2D, RenderConfig } from '../utils/RenderConfig';
import Vec2 from '../utils/Vec2';
import Shape from './Shape';

class StraightLine implements Shape {

  public ptrBegin: Vec2 = new Vec2(0, 0);
  public ptrEnd: Vec2 = new Vec2(0, 0);
  public renderState: Partial<RenderConfig> = {};
  
  constructor(ptrBegin: Vec2, ptrEnd: Vec2, renderState: Partial<RenderConfig> = {}) {
    this.ptrBegin = ptrBegin;
    this.ptrEnd = ptrEnd;
    this.renderState = renderState;
  }

  render(context2D: CanvasRenderingContext2D) {
    context2D.save();
    decratorContext2D(context2D, this.renderState);
    context2D.beginPath();
    context2D.moveTo(this.ptrBegin.x, this.ptrBegin.y);
    context2D.lineTo(this.ptrEnd.x, this.ptrEnd.y);
    context2D.closePath();
    actionContext2D(context2D, this.renderState);
    context2D.restore();
  }
}

export default StraightLine;
