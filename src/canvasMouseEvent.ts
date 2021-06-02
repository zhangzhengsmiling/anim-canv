import CanvasInputEvent, { EInputEventType } from './canvasInputEvent';
import Vec2 from './utils/Vec2';

class CanvasMouseEvent extends CanvasInputEvent {
  public button: number;
  public canvasPosition: Vec2;
  public localPosition: Vec2;

  public constructor(
    canvasPosition: Vec2,
    button: number,
    altKey: boolean = false,
    shiftKey: boolean = false,
    ctrlKey:boolean = false
  ) {
    super(altKey, shiftKey, ctrlKey, EInputEventType.MOUSEEVENT);
    this.canvasPosition = canvasPosition;
    this.button = button;
    this.localPosition = Vec2.create(0, 0);
  }
}

export default CanvasMouseEvent;
