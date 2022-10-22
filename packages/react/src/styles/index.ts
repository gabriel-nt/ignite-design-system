import {
  fonts,
  space,
  radii,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },
  theme: {
    fonts,
    space,
    radii,
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
  },
})
