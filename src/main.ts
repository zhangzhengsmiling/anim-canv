import Canvas2DApplication from './application/Canvas2DApplication';
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const img = new Image();
img.src = 'https://p1.ssl.qhimg.com/dr/270_500_/t0199ef6050dfe5064e.jpg?size=707x1183';
img.width = 707;
img.height = 1183;

class Application extends Canvas2DApplication {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  drawRect(x: number, y: number,width:number, height: number, config: any = {}) {
    const { context2D } = this;
    if (!context2D) throw new Error('get content error...');
    context2D.save();
    context2D.fillStyle = config.fillStyle || 'orange';
    context2D.strokeStyle = config.strokeStyle || 'red';
    context2D.fillRect(x, y, width, height);
    context2D.restore();
  }

  update(elapsedMsec: number) {
    const { context2D } = this;
    if (!context2D) throw new Error('get content error...');
    context2D.clearRect(0, 0, canvas.width, canvas.height);
    context2D.fillStyle = 'orange';
    let speed = 10;
    const t = elapsedMsec / 1000;

    this.drawRect(t * speed,10, 100, 20);
    this.drawRect(t * speed, t * speed, 40, 20, { fillStyle: 'green' });
    this.drawRect(10, t * speed, 60, 30);
    
    context2D.drawImage(img, 0,0, img.width / 10, img.height / 10);
    const image = context2D.getImageData(0, 0, img.width/10, img.height / 10);
    console.log(image);
    const nd = image.data.map((atomic, index) => {
      if (index % 4 === 3) {
        return 255;
      } else {
        return atomic
      }
    });
    const imageData = context2D.createImageData({
      data: nd,
      width: img.width / 10,
      height: img.height / 10
    })
    // const _img = new Image();
    context2D.putImageData(imageData, 0, 0)

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

console.log('hello, world');
console.log('ERROR')
