import Canvas2DApplication from './application/Canvas2DApplication';
import { EnumColor } from './utils/Color';
import Vec2 from './utils/Vec2';
import Font from './utils/Font';
import CanvasKeyBoardEvent from './event/CavasKeyBoardEvent';
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

interface RenderConfig {
  fillStyle?: string | CanvasGradient | CanvasPattern;
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
  lineCap?: CanvasLineCap;
  lineDash?: number[];
  lineDashOffset?: number;
  font?: string;
  textAlign?: CanvasTextAlign;
  textBaseLine?: CanvasTextBaseline;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
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
    font,
    textAlign,
    textBaseLine,
    shadowColor,
    shadowBlur,
    shadowOffsetX,
    shadowOffsetY,
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
  if(font)
    context.font = font;
  if(textAlign)
    context.textAlign = textAlign;
  if(textBaseLine)
    context.textBaseline = textBaseLine;
  if(shadowColor)
    context.shadowColor = shadowColor;
  if(shadowBlur)
    context.shadowBlur = shadowBlur;
  if(shadowOffsetX)
    context.shadowOffsetX = shadowOffsetX;
  if(shadowOffsetY)
    context.shadowOffsetY = shadowOffsetY;
  
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

const src = 'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg';
const eleImage = document.createElement('img') as HTMLImageElement;
eleImage.src = src;


class Tank {
  public turrentLength: number = 60;
  public turrentRotation: number = 40;
  public position: Vec2 = new Vec2(100, 100);
  public width: number = 100;
  public height: number = 60;

  public onKeyDown(e: CanvasKeyBoardEvent) {
    if(e.key === 'ArrowDown') {
      this.position.y += 5;
    }
    if(e.key === 'ArrowUp') {
      this.position.y -= 5;
    }
    if(e.key === 'ArrowLeft') {
      this.position.x -= 5;
    }
    if(e.key === 'ArrowRight') {
      this.position.x += 5;
    }
    if(e.key === 'w') {
      this.turrentRotation += 3;
    }
    if(e.key === 's') {
      this.turrentRotation -= 3;
    }
  }

  render(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.arc(0, 0, 5, 0, Math.PI * 2);
    context.fill();
    context.save();
    context.fillStyle = EnumColor.ORANGE;
    context.rect(-this.width * 0.5, -this.height * 0.5, this.width, this.height);
    context.fill();
    context.restore();
    context.save();
    context.rotate(this.turrentRotation / 180 * Math.PI);
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.turrentLength, 0);
    context.closePath();
    context.stroke();
    context.restore();
    context.restore();
  }

}


class Application extends Canvas2DApplication {

  private tank: Tank = new Tank();

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
    context2D.save();
    decratorContext2D(context2D, config);
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
    context2D.save();
    decratorContext2D(context2D, config);
    const {
      width = 800,
      height = 600,
      ptr = new Vec2(0, 0),
      gridWidth = 40,
      gridHeight = 40,
    } = options;

    for(let i = 0; i < height / gridHeight; i++) {
      this.drawLine(
        new Vec2(ptr.x, i * gridHeight + ptr.y),
        new Vec2(width + ptr.x, i * gridHeight + ptr.y),
        config
      )
    }
    this.drawLine(
      new Vec2(ptr.x + width, ptr.y),
      new Vec2(ptr.x + width, ptr.y + height),
      config
    );
    for(let j = 0; j < width / gridWidth; j++) {
      this.drawLine(
        new Vec2(ptr.x + j * gridWidth, ptr.y),
        new Vec2(ptr.x + j * gridWidth, ptr.y + height),
        config
      )
    }
    this.drawLine(
      new Vec2(ptr.x, ptr.y + height),
      new Vec2(ptr.x + width, ptr.y + height),
      config
    )
    actionContext2D(context2D, config);
    context2D.restore();
  }

  drawText(text: string, position: Vec2, config: RenderConfig = {}) {
    const { context2D } = this;
    if(!context2D) throw new Error('get context error...');
    context2D.save();
    decratorContext2D(context2D, config);
    if(context2D.strokeStyle)
      context2D.strokeText(text, position.x, position.y);
    if(
      context2D.fillStyle ||
      (!context2D.strokeStyle && context2D.fillStyle)
    )
      context2D.fillText(text, position.x, position.y);
    context2D.restore();
  }

  private lineDashOffset: number = 10;


  draw(context2D: CanvasRenderingContext2D) {
    this.lineDashOffset = (this.lineDashOffset - 1) % 1000;
    const linearGradient = context2D.createLinearGradient(
      100, 100, 200, 300
    );
    linearGradient.addColorStop(0, EnumColor.PURPLE);
    linearGradient.addColorStop(1, EnumColor.RED);

    this.drawRect(100, 100, 100, 200, {
      lineWidth: 2,
      lineDash: [10, 5],
      lineDashOffset: (this.lineDashOffset - 1) % 1000,
      fillStyle: linearGradient,
      strokeStyle: EnumColor.PURPLE
    });

    const radiaGradient = context2D.createRadialGradient(
      400, 400, 0, 400, 400, 100
    );
    radiaGradient.addColorStop(0, EnumColor.YELLOW);
    radiaGradient.addColorStop(1, EnumColor.FUCHSIA);

    this.drawCircle(400, 400, 100, 0, Math.PI *2,{
      fillStyle: radiaGradient,
      shadowColor: EnumColor.RED,
      shadowBlur: 80
    });
    this.drawCircle(                                                                                                                                                                                                                                                                                                       
      400, 400, 20, 0, Math.PI * 2,
      {
        lineDash: [10, 5],
      }
    );
    this.drawLine(
      new Vec2(342, 200),
      new Vec2(544, 333),
    );

    const font = new Font();
    font.setFontSize('80px');
    font.setFontStyle('italic');
    this.drawText('hello, world', new Vec2(600, 400), {
      font: font.toString(),
      fillStyle: EnumColor.YELLOW,
      strokeStyle: EnumColor.BLACK,
      shadowColor: EnumColor.ORANGE,
      shadowBlur: 10
    })
    this.drawGrid({
      ptr: new Vec2(0, 0),
      width: this.canvas?.width,
      height: this.canvas?.height
    }, {
      lineWidth: 1,
      strokeStyle: EnumColor.ORANGE,
      lineDash: [5, 10]
    });

    context2D.drawImage(eleImage, 1400, 200, 600, 400);
  }

  update(elapsedMsec: number) {
    const { context2D } = this;
    if (!context2D) throw new Error('get context error...');
    context2D.strokeStyle = EnumColor.BLACK;
    context2D.clearRect(0, 0, canvas.width, canvas.height);
    // this.draw(context2D);
    this.transform(context2D, elapsedMsec);
    this.transform2(context2D, elapsedMsec);
    this.tank.render(context2D);
  }

  dispatchKeyDown(e: CanvasKeyBoardEvent) {
    this.tank.onKeyDown(e);
    console.log(e.key);
  }

  pos_x = 0;
  pos_y = 0;


  transform(context2D: CanvasRenderingContext2D, elapsedMsec: number) {
    context2D.save();
    context2D.translate(this.pos_x, this.pos_y);
    // context2D.rotate(elapsedMsec / 1000 * 100 / 180 * Math.PI);
    this.drawRect(-20, -30, 40, 60, {
      fillStyle: EnumColor.ORANGE,
    });
    context2D.restore();

  }

  transform2(context2D: CanvasRenderingContext2D, elapsedMsec: number) {
    context2D.save();
    context2D.translate(this.pos_x, this.pos_y);
    this.drawLine(new Vec2(0, 0), new Vec2(50, 0), {
      lineWidth: 5
    })
    context2D.restore();
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
