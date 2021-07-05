import { RenderConfig } from '../utils/RenderConfig';
import Vec2 from '../utils/Vec2';
import Shape from './Shape';

class QuadraticBezierCurve implements Shape {

  public ptrBegin: Vec2 = new Vec2(0, 0);
  public ptrControl: Vec2 = new Vec2(0, 0);
  public ptrEnd: Vec2 = new Vec2(0, 0);

  public renderState: Partial<RenderConfig> = {};
  render(context2D: CanvasRenderingContext2D) {

  }
}
