import Typography from 'typography'
import 'fontsource-inter'

const typography = new Typography({
  title: 'GenshinDB',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  includeNormalize: false,
  scaleRatio: 2.441,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography
export const { rhythm } = typography
