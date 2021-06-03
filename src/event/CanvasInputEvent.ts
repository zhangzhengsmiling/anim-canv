export enum EInputEventType {
  MOUSEEVENT,
  MOUSEDOWN,
  MOUSEUP,
  MOUSEMOVE,
  MOUSEDRAG,
  KEYBOARDEVENT,
  KEYUP,
  KEYDOWN,
  KEYPRESS,
}

export default class CanvasInputEvent {
  public altKey: boolean;
  public shiftKey: boolean;
  public ctrlKey: boolean;

  public type: EInputEventType;
  constructor(altKey: boolean, shiftKey: boolean, ctrlKey: boolean, type: EInputEventType) {
    this.altKey= altKey;
    this.shiftKey = shiftKey;
    this.ctrlKey = ctrlKey;
    this.type = type; 
  }
}

