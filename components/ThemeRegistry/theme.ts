import { primaryFont, primaryMonoOneFont } from '@/app/fonts'
import themeConfig from '@/theme.config.json'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: primaryMonoOneFont.style.fontFamily,
    body1: {
      fontFamily: primaryFont.style.fontFamily,
    },
    body2: {
      fontFamily: primaryFont.style.fontFamily,
    },
    caption: {
      fontFamily: primaryFont.style.fontFamily,
    },
  },
  palette: {
    primary: {
      main: themeConfig.colors.primary,
      dark: themeConfig.colors.primaryDark,
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
