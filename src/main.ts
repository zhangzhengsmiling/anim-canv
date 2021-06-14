import Canvas2DApplication from './application/Canvas2DApplication';
import { EnumColor } from './utils/Color';
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

class Application extends Canvas2DApplication {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  drawRect(x: number, y: number,width:number, height: number, config: any = {}) {
    const { context2D } = this;
    if (!context2D) throw new Error('get content error...');
    context2D.save();
    context2D.fillStyle = config.fillStyle;
    context2D.strokeStyle = config.strokeStyle || EnumColor.PURPLE;
    context2D.lineWidth = config.lineWidth;
    // context2D.rect(x, y, width, height);
    context2D.beginPath();
    context2D.moveTo(x, y);
    context2D.lineTo(x + width, y);
    context2D.lineTo(x + width, y + height);
    context2D.lineTo(x, y + height);
    context2D.closePath();
    context2D.stroke()
    if (config.fillStyle)
      context2D.fill();
    context2D.restore();
  }

  private lineDashOffset: number = 10;

  update(elapsedMsec: number) {
    const { context2D } = this;
    if (!context2D) throw new Error('get content error...');
    context2D.clearRect(0, 0, canvas.width, canvas.height);

    context2D.setLineDash([10, 5]);
    context2D.lineDashOffset = this.lineDashOffset;
    this.lineDashOffset = (this.lineDashOffset - 1) % 1000;
    this.drawRect(100, 100, 100, 200, { lineWidth: 2 });

    // context2D.fillStyle = 'orange';
    // let speed = 10;
    // const t = elapsedMsec / 1000;

    // this.drawRect(t * speed,10, 100, 20);
    // this.drawRect(t * speed, t * speed, 40, 20, { fillStyle: 'green' });
    // this.drawRect(10, t * speed, 60, 30);
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