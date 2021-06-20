import CanvasApplication from './Application';

class WebGlApplication extends CanvasApplication {

  public context3D: WebGLRenderingContext | null;

  constructor(canvas: HTMLCanvasElement, contextAttributes?: WebGLContextAttributes) {
    super(canvas);
    this.context3D = this.canvas!.getContext('webgl', contextAttributes);
    if (this.context3D === null) {
      throw new Error('无法创建WebGLRenderingContexts上下文对象');
    }
    this.init();
  }
}
