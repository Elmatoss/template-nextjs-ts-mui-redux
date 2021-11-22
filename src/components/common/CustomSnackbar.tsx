import React, { useState, useEffect, useCallback } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { useAppDispatch, useAppSelector } from '../../lib/customHooks'
import { hideSnackbar } from '../../redux/app/snackbar'
import { useTranslate } from '../../lib/translate'

const CustomSnackbar = () => {
  const translate = useTranslate()
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const currentSnackbar = useAppSelector(state => state.app.snackbar?.[0])

  const handleClose = useCallback(
    (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return
      }
      setOpen(false)
    },
    []
  )

  const handleExited = useCallback(() => {
    dispatch(hideSnackbar())
  }, [dispatch])

  useEffect(() => {
    setOpen(!!currentSnackbar)
  }, [currentSnackbar])

  if (!currentSnackbar) {
    return null
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={4500}
      TransitionProps={{ onExited: handleExited }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        elevation={6}
        variant="filled"
        severity={currentSnackbar?.type ?? 'info'}
      >
        {translate(currentSnackbar.message)}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
