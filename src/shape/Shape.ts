import { RenderConfig } from '../utils/RenderConfig';

interface IShape {
  renderState: Partial<RenderConfig>;
  render: (context2D: CanvasRenderingContext2D) => void;
}

export default IShape;
