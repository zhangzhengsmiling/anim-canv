import Canvas2DApplication from './application/Canvas2DApplication';
import { EnumColor } from './utils/Color';
import Vec2 from './utils/Vec2';
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

interface RenderConfig {
  fillStyle?: string | CanvasGradient | CanvasPattern;
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
  lineCap?: CanvasLineCap;
  lineDash?: number[];
  lineDashOffset?: number;
}

const decratorContext2D = (
  context: CanvasRenderingContext2D,
  renderConfig: RenderConfig
) => {
  const {
    fillStyle,
    strokeStyle,
    lineWidth,
    lineCap,
    lineDash,
    lineDashOffset,
  } = renderConfig;
  if(fillStyle)
    context.fillStyle = fillStyle;
  if(strokeStyle)
    context.strokeStyle = strokeStyle;
  if(lineWidth)
    context.lineWidth = lineWidth;
  if(lineCap)
    context.lineCap = lineCap;
  if(lineDash)
    context.setLineDash(lineDash);
  if(lineDashOffset)
    context.lineDashOffset = lineDashOffset;
}
const actionContext2D = (
  context: CanvasRenderingContext2D,
  renderConfig: RenderConfig
) => {
  if(renderConfig.fillStyle) {
    context.fill();
  }
  if(
    renderConfig.strokeStyle ||
    (!renderConfig.strokeStyle && !renderConfig.fillStyle)
  ) {
    context.stroke();
  }
}

class Application extends Canvas2DApplication {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  drawRect(x: number, y: number,width:number, height: number, config: RenderConfig = {}) {
    const { context2D } = this;
    if (!context2D) throw new Error('get context error...');
    context2D.save();
    decratorContext2D(context2D, config);
    context2D.beginPath();
    context2D.moveTo(x, y);
    context2D.lineTo(x + width, y);
    context2D.lineTo(x + width, y + height);
    context2D.lineTo(x, y + height);
    context2D.closePath();
    actionContext2D(context2D, config);
    context2D.restore();
  }

  drawCircle(
    cx: number,
    cy: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    config: RenderConfig = {}
  ) {
    const { context2D } = this;
    if (!context2D) throw new Error('get context error...');
    context2D.save();
    decratorContext2D(context2D, config);
    context2D.beginPath();
    context2D.arc(
      cx,
      cy,
      radius,
      startAngle,
      endAngle
    );
    context2D.closePath();
    actionContext2D(context2D, config);
    context2D.restore();
  }

  drawLine(ptrBegin: Vec2, ptrEnd: Vec2, config: RenderConfig = {}) {
    const { context2D } = this;
    if (!context2D) throw new Error('get context error...');
    decratorContext2D(context2D, config);
    context2D.save();
    context2D.beginPath();
    context2D.moveTo(ptrBegin.x, ptrBegin.y);
    context2D.lineTo(ptrEnd.x, ptrEnd.y);
    context2D.closePath();
    actionContext2D(context2D, config);
    context2D.restore();
  }

  drawGrid(options: any = {}, config: RenderConfig = {}) {
    const { context2D } = this;
    if(!context2D) throw new Error('get context error...');
    decratorContext2D(context2D, config);
    context2D.save();
    const {
      width = 800,
      height = 600,
      ptr = new Vec2(0, 0),
      gridWidth = 20,
      gridHeight = 10,
    } = options;

    for(let i = 0; i < height / gridHeight; i++) {
      this.drawLine(
        new Vec2(0, i * gridHeight),
        new Vec2(width, i * gridHeight),
        config
      )
    }
    this.drawLine(
      new Vec2(width, 0),
      new Vec2(width, height),
      config
    );
    for(let j = 0; j < width / gridWidth; j++) {
      this.drawLine(
        new Vec2(j * gridWidth, 0),
        new Vec2(j * gridWidth, height),
        config
      )
    }
    this.drawLine(
      new Vec2(0, height),
      new Vec2(width, height),
      config
    )
    actionContext2D(context2D, config);
    context2D.restore();
  }


  private lineDashOffset: number = 10;

  update(elapsedMsec: number) {
    const { context2D } = this;
    if (!context2D) throw new Error('get context error...');
    context2D.strokeStyle = EnumColor.BLACK;
    context2D.clearRect(0, 0, canvas.width, canvas.height);
    this.lineDashOffset = (this.lineDashOffset - 1) % 1000;
    this.drawRect(100, 100, 100, 200, {
      lineWidth: 2,
      lineDash: [10, 5],
      lineDashOffset: (this.lineDashOffset - 1) % 1000,
    });
    this.drawCircle(400, 400, 20, 0, Math.PI * 2);
    this.drawLine(
      new Vec2(342, 200),
      new Vec2(544, 333)
    );
    this.drawGrid(undefined, {
      lineWidth: 1,
      strokeStyle: EnumColor.ORANGE,
      lineDash: [4, 1]
    });
  }


  moveX(x: number, y: number, speed: number, borderX: number) {
    if (x < borderX) {
      x += speed;
    }

    return {
      x,y
    };
  }

}

const init = (canvas: HTMLCanvasElement) => {
  const clienWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  canvas.width = clienWidth;
  canvas.height = clientHeight;
}

init(canvas);

const app = new Application(canvas);
app.start()
