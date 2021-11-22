import { ReactNode, useMemo } from 'react'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import { useAppSelector } from '../lib/customHooks'

const getTheme = (mode: PaletteMode) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode,
      },
    })
  )

interface CustomThemeProviderProps {
  children: ReactNode
}

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const mode = useAppSelector(state => state.app.theme.mode)
  const theme = useMemo(() => getTheme(mode || 'dark'), [mode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
