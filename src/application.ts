import CanvasMouseEvent from './canvasMouseEvent';
import CanvasKeyBoardEvent from './cavasKeyBoardEvent';
import Vec2 from './utils/Vec2';


class CanvasApplication implements EventListenerObject {
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

  private _viewportPos2CanvasPos(evt: MouseEvent) {
    if (!this.canvas) throw new Error('canvas is not an element');
    const bounds: ClientRect = this.canvas.getBoundingClientRect();
    if (evt.type === 'mousedown') {
      console.log(evt.clientX, evt.clientY);
      console.log(bounds);
    }
    const x = evt.clientX - bounds.left;
    const y = evt.clientY - bounds.top;
    return Vec2.create(x, y);
  }

  private _event2CanvasMouseEvent(evt: Event): CanvasMouseEvent {
    const event = evt as MouseEvent;
    const bounds = this._viewportPos2CanvasPos(event);
    const canvasEvt = new CanvasMouseEvent(
      bounds,
      event.button,
      event.altKey,
      event.shiftKey,
      event.ctrlKey
    );
    return canvasEvt;
  }

  private _event2CanvasKeyBoardEvent(evt: Event): CanvasKeyBoardEvent {
    let event = evt as KeyboardEvent;
    const canvasEvt = new CanvasKeyBoardEvent(
      event.key,
      event.code,
      event.altKey,
      event.shiftKey,
      event.ctrlKey
    );
    return canvasEvt;
  }

  public handleEvent(evt: Event): void {
    switch(evt.type) {
      case 'mousedown':
        this.dispatchMouseDown(
          this._event2CanvasMouseEvent(evt)
        );
        break;
      case 'mouseup':
        this.dispatchMouseUp(
          this._event2CanvasMouseEvent(evt)
        );
        break;
      case 'mousemove':
        this.dispatchMouseUp(
          this._event2CanvasMouseEvent(evt)
        );
        break;
      // case 'mousesdrag'
      case 'keydown':
        this.dispatchKeyDown(
          this._event2CanvasKeyBoardEvent(evt)
        );
        break;
      case 'keyup':
        this.dispatchKeyUp(
          this._event2CanvasKeyBoardEvent(evt)
        );
        break;
      case 'keypress':
        this.dispatchKeyPress(
          this._event2CanvasKeyBoardEvent(evt)
        );
        break;

    }
  }

  protected dispatchMouseDown(evt: CanvasMouseEvent): void {};
  protected dispatchMouseUp(evt:CanvasMouseEvent): void {};
  protected dispatchMouseMove(evt: CanvasMouseEvent): void {};
  protected dispatchMouseDrag(evt: CanvasMouseEvent): void {};
  protected dispatchKeyDown(evt: CanvasKeyBoardEvent): void {};
  protected dispatchKeyUp(evt: CanvasKeyBoardEvent): void {};
  protected dispatchKeyPress(evt: CanvasKeyBoardEvent): void {};
}

export default CanvasApplication;
