import { useCallback } from 'react'
import { AlertColor } from '@mui/material'

import { useAppDispatch } from '.'
import { showSnackbar } from '../../redux/app/snackbar'

const useSnackbar = () => {
  const dispatch = useAppDispatch()
  return useCallback(
    (message: string, type: AlertColor) => {
      dispatch(showSnackbar({ message, type }))
    },
    [dispatch]
  )
}

export default useSnackbar
