type FontStyle = 'normal' | 'italic' | 'oblique';
type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' |
  '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type FontVariant = 'normal' | 'small-caps';

interface IFontConfig {
  fontStyle: FontStyle;
  fontVariant: FontVariant;
  fontWeight: FontWeight;
  fontSize: string;
  fontFamily: string;
}

class Font {
  private fontStyle: FontStyle;
  private fontVariant: FontVariant;
  private fontWeight: FontWeight;
  private fontSize: string;
  private fontFamily: string;

  constructor(fontConfig: Partial<IFontConfig> = {}) {
    const {
      fontSize = '16px',
      fontFamily = 'sans-serif',
      fontStyle = 'normal',
      fontVariant = 'normal',
      fontWeight = 'normal',
    } = fontConfig;

    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
    this.fontStyle = fontStyle;
    this.fontVariant = fontVariant;
    this.fontWeight = fontWeight;
  }

  public setFontStyle(fontStyle: FontStyle) {
    this.fontStyle = fontStyle;
  }
  public setFontFamily(fontFamily: string) {
    this.fontFamily = fontFamily;
  }
  public setFontSize(fontSize: string) {
    this.fontSize = fontSize;
  }
  public setFontWeight(fontWeight: FontWeight) {
    this.fontWeight = fontWeight;
  }
  public setFontVariant(fontVariant: FontVariant) {
    this.fontVariant = fontVariant;
  }

  // @override
  public toString() {
    const arr = [
      this.fontStyle,
      this.fontVariant,
      this.fontWeight,
      this.fontSize,
      this.fontFamily
    ];
    return arr.join(' ');
  }
}

export default Font;
