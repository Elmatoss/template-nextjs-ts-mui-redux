import { Box, Button } from '@mui/material'

import useSnackbar from '../lib/customHooks/useSnackbar'

const WelcomePage = () => {
  const showSnackbar = useSnackbar()
  return (
    <Box sx={{ width: 500, height: 500 }}>
      <Button
        onClick={() => showSnackbar('Test Snackbar!', 'success')}
        variant="contained"
      >
        Test MUI Snackbar
      </Button>
    </Box>
  )
}
export default WelcomePage
