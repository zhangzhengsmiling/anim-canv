interface IVec2 {
  x: number;
  y:number;
}

interface ICanvasMouseEvent {
  button: number;
  canvasPosition: IVec2;
  localPosition: IVec2;
}

interface ICanvasKeyBoardEvent  {
  key: string;
  keyCode: number;
  repeat: boolean;
}

export default class CanvasApplication {
  public canvas!: HTMLCanvasElement | null;
  public isSupportMouseMove!: boolean;

  private isRunning: boolean = false;
  private requestId: number = -1;
  private elapsedMsec: number = 0;
  private diffMsec: number = 0;
  private startTime: number = 0;
  
  public start(): void {
    if (!this.isRunning) {
      // 如果当前应用未启用循环绘制
      this.isRunning = true;
      this.startTime = new Date().valueOf();
      // 启用循环绘制
      this.step(this.elapsedMsec, this.diffMsec);
    }
  };
  public stop():void {
    if (this.isRunning) {
      this.isRunning = false;
      this.startTime = 0;
      cancelAnimationFrame(this.requestId);
    }
  };

  protected step(elapsedMsec: number, diffMsec: number) {
    this.elapsedMsec = new Date().valueOf() - this.startTime;
    this.diffMsec = this.elapsedMsec -  elapsedMsec;

    this.update(this.elapsedMsec, this.diffMsec);
    this.render();

    this.requestId = requestAnimationFrame(() => {
      this.step(this.elapsedMsec, this.diffMsec);
    })
  }

  public update(elapsedMsec: number, diffMsec: number): void {
    console.log('update ...')
  };

  public render(): void {};
  public showFPS(show: boolean): void {};

  protected dispatchMouseDown(evt: ICanvasMouseEvent): void {};
  protected dispatchMouseUp(evt:ICanvasMouseEvent): void {};
  protected dispatchMouseNove(evt: ICanvasMouseEvent): void {};
  protected dispatchMouseDrag(evt: ICanvasMouseEvent): void {};
  protected dispatchKeyDown(evt: ICanvasKeyBoardEvent): void {};
  protected dispatchKeyUIp(evt: ICanvasKeyBoardEvent): void {};
  protected dispatchKeyPress(evt: ICanvasKeyBoardEvent): void {};
}

// export default Application;