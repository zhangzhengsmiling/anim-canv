import CanvasApplication from './Application';


class Canvas2DApplication extends CanvasApplication {
  public context2D!: CanvasRenderingContext2D | null;
  public constructor(
    canvas: HTMLCanvasElement,
    contextAttributions?: any
    // contextAttributions?: Canvas2DContextAttributes
  ) {
    super(canvas as HTMLCanvasElement);
    this.context2D = this.canvas!.getContext(
        '2d',
        contextAttributions
      ) as CanvasRenderingContext2D;
    this.init();
  }
}

export default Canvas2DApplication;