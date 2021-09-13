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

const init = (canvas: HTMLCanvasElement) => {
  const clienWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  canvas.width = clienWidth;
  canvas.height = clientHeight;
}

class Sprit {
  public position: Vec2 = new Vec2(0, 0);

  public angle: number = 50;
  public leftArmAngle = 0;
  public rightArmAngle = 0;
  public leftElbowAngle = 0;
  public rightElbowAngle = 0;

  public leftLegAngle = 0;
  public rightLegAngle = 0;
  public leftKneeAngle = 0;
  public rightKneeAngle = 0;

  public state = 1;

  constructor() {
  }

  changeState = () => {

    const rate = 5
    if (this.state === 1) {
      this.rightLegAngle += 10 / 60 * rate;
      this.rightKneeAngle -= 8 / 60 * rate;
      this.leftLegAngle += -5 / 60 * rate;
      this.leftKneeAngle -= 3 / 60 * rate;

      this.leftArmAngle += 5 / 60 * rate;
      this.leftElbowAngle += 3 / 50 * rate;
      this.rightArmAngle -= 3 / 60 * rate;
    } else if (this.state === 2) {
      this.rightLegAngle -= 10 / 60 * rate;
      this.rightKneeAngle += 8 / 60 * rate;
      this.leftLegAngle -= -5 / 60 * rate;
      this.leftKneeAngle += 3 / 60 * rate;

      this.leftArmAngle -= 5 / 60 * rate;
      this.leftElbowAngle -= 3 / 50 * rate;
      this.rightArmAngle += 3 / 60 * rate;

    } else if (this.state === 3) {
      this.leftLegAngle += 10 / 60 * rate;
      this.leftKneeAngle -= 8 / 60 * rate;
      this.rightLegAngle += -5 / 60 * rate;
      this.rightKneeAngle -= 3 / 60 * rate;

      
      this.rightArmAngle += 5 / 60 * rate;
      this.rightElbowAngle += 3 / 50 * rate;
      this.leftArmAngle -= 3 / 60 * rate;

    } else if (this.state === 4) {
      this.leftLegAngle -= 10 / 60 * rate;
      this.leftKneeAngle += 8 / 60 * rate;
      this.rightLegAngle -= -5 / 60 * rate;
      this.rightKneeAngle += 3 / 60 * rate;

      this.rightArmAngle -= 5 / 60 * rate;
      this.rightElbowAngle -= 3 / 50 * rate;
      this.leftArmAngle += 3 / 60 * rate;

    }

    if(this.state === 1 && this.rightLegAngle >= 60) {
      this.state = 2;
    } else if (this.state === 2 && this.rightLegAngle <= 0) {
      this.state = 3;
    } else if(this.state === 3 && this.leftLegAngle >= 60) {
      this.state = 4;
    } else if (this.state === 4 && this.leftLegAngle <= 0) {
      this.state = 1;
    }
  }


  render(ctx: CanvasRenderingContext2D) {


    ctx.save();
    ctx.translate(300, 400);
    ctx.strokeStyle = EnumColor.BLACK;

    ctx.save();
    ctx.fillStyle = EnumColor.ORANGE;
    ctx.translate(10, 85);
    ctx.rotate(this.rightArmAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(30 * Math.sin(25 / 180 * Math.PI), 25 * Math.cos(30 / 180 * Math.PI));
    ctx.rotate(this.rightElbowAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(-12, 5, 20, 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, 35);
    ctx.arc(0, 10, 15, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.restore();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, 40, 40);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(10, 40);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = EnumColor.WHITE;
    ctx.translate(0, 65);
    ctx.beginPath();
    ctx.rect(0, 0, 40, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = EnumColor.GREEN;
    ctx.translate(10, 85);
    ctx.rotate(this.leftArmAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(30 * Math.sin(25 / 180 * Math.PI), 25 * Math.cos(30 / 180 * Math.PI));
    ctx.rotate((this.leftElbowAngle) / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(-12, 5, 20, 35);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.translate(0, 35);
    ctx.arc(0, 10, 15, 0, Math.PI * 2) ;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.restore();
    ctx.restore();


    ctx.save();
    ctx.fillStyle = EnumColor.ORANGE;
    ctx.translate(10, 165);
    ctx.rotate(this.rightLegAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(0, 40);
    ctx.rotate(this.rightKneeAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(0, 60);
    ctx.beginPath();
    ctx.rect(-5, 0, 30, 30);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.restore();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = EnumColor.GREEN;
    ctx.translate(10, 165);
    ctx.rotate(this.leftLegAngle / 180 * Math.PI);
    ctx.beginPath();
    ctx.rect(0, 0, 20, 40);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(0, 40);
    ctx.beginPath();
    ctx.rotate(this.leftKneeAngle / 180 * Math.PI);
    ctx.rect(0, 0, 20, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.save();
    ctx.translate(0, 60);
    ctx.beginPath();
    ctx.rect(-5, 0, 30, 30);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.restore();
    ctx.restore();

    ctx.restore();
    this.changeState()
  }

}

const qPoints = (ptBegin: Vec2, ptControl: Vec2, ptEnd: Vec2) => {
  return (slice: number) => {
    const res: Vec2[] = [];
    for(let i = 0; i <= slice; i++) {
      const percent =  1 / slice * i;
      const x = (1 - percent) * (1 - percent) * ptBegin.x + 2 * percent * (1 - percent) * ptControl.x + percent * percent * ptEnd.x;
      const y = (1 - percent) * (1 - percent) * ptBegin.y + 2 * percent * (1 - percent) * ptControl.y + percent * percent * ptEnd.y;
      res.push(
        new Vec2(x, y)
      );
    }
    return res;
  }
}

class TestApplication extends Canvas2DApplication {

  public sprit = new Sprit();
  public direct = true;

  update(elapsedMsec: number) {
    const { context2D, canvas } = this;
    if (!context2D || !canvas) return;

    context2D.clearRect(0, 0, canvas.width, canvas.height);

    this.sprit.render(context2D);

    context2D.beginPath();

    context2D.moveTo(300, 300);

    context2D.quadraticCurveTo(500, 300, 500, 500);

    const qpg = qPoints(
      new Vec2(300, 300),
      new Vec2(500, 300),
      new Vec2(500, 500)
    );
    const pts = qpg(10);

    context2D.stroke();

    context2D.closePath();

    pts.forEach(point => {
      context2D.save();
      context2D.fillStyle = EnumColor.GRAY;
      context2D.beginPath();
      context2D.arc(point.x, point.y, 2, 0, Math.PI * 2);
      context2D.closePath();
      context2D.fill();
      context2D.restore();
    })


  }
}

init(canvas);

const app = new TestApplication(canvas);
app.start();
