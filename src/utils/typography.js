import Typography from 'typography'

const typography = new Typography({
	baseFontSize : "18px",
	baseLineHeight : 1.6666666666666667,
	blockMarginBottom : 1,
	bodyColor : "hsla(0,0%,0%,0.8)",
	bodyFontFamily : ["Archivo Narrow", "Georgia", "serif"],
	bodyWeight :400,
	boldWeight :700,
	googleFonts : [{name : "Roboto Condensed", styles : ["400", "400i"]}, {name : "Archivo Narrow", styles : ["400", "700"]}],
	headerColor :"hsla(0,0%,0%,1)",
	headerFontFamily : ["Roboto Condensed", "sans-serif"],
	headerLineHeight: 1.1,
	headerWeight: 400,
	includeNormalize: true,
	scaleRatio: 2,
});

export default typography;