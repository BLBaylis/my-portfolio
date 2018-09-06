import Typography from "typography";

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.6666666666666667,
  blockMarginBottom: 1,
  bodyFontFamily: ['Archivo Narrow', 'Georgia', 'serif'],
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    { name: 'Roboto Condensed', styles: ['400', '400i'] },
    { name: 'Archivo Narrow', styles: ['400', '700'] },
  ],
  headerFontFamily: ['Roboto Condensed', 'sans-serif'],
  headerLineHeight: 1.1,
  headerWeight: 400,
  includeNormalize: true,
  scaleRatio: 3,
})

export default typography;
