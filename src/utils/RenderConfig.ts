export interface RenderConfig {
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;
  lineWidth: number;
  lineCap: CanvasLineCap;
  lineDash: number[];
  lineDashOffset: number;
  font: string;
  textAlign: CanvasTextAlign;
  textBaseLine: CanvasTextBaseline;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

export const decratorContext2D = (
  context: CanvasRenderingContext2D,
  renderConfig: Partial<RenderConfig>
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

export const actionContext2D = (
  context: CanvasRenderingContext2D,
  renderConfig: Partial<RenderConfig>,
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
