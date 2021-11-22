import { PaletteMode } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  mode: PaletteMode
}

const initialState: ThemeState = { mode: 'dark' }

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
