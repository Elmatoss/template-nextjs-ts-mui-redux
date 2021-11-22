import { AlertColor } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

interface SnackbarContent {
  message: string
  type?: AlertColor
}

interface ShowSnackbarAction {
  payload: SnackbarContent
  type: string
}

const initialState: Array<SnackbarContent> = []

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar(state, action: ShowSnackbarAction) {
      state.push(action.payload)
    },
    hideSnackbar(state) {
      state.shift()
    },
  },
})

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer
