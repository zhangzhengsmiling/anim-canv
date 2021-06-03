import CanvasInputEvent, { EInputEventType } from './CanvasInputEvent';

class CanvasKeyBoardEvent extends CanvasInputEvent {
  public key: string;
  public code: string;
  constructor(
    key: string,
    code: string,
    altKey: boolean = false,
    shiftKey: boolean = false,
    ctrlKey: boolean = false
  ) {
    super(altKey, shiftKey, ctrlKey, EInputEventType.KEYBOARDEVENT);
    this.key = key;
    this.code = code;
  }
}

export default CanvasKeyBoardEvent;
