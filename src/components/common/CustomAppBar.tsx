import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Switch,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { toggleTheme } from '../../redux/app/theme'
import { useAppDispatch, useAppSelector } from '../../lib/customHooks'

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: theme.spacing(0.5),
    transform: 'translateX(6px)',
    backgroundColor: '#000',
    '&.Mui-checked': {
      color: theme.palette.primary,
      backgroundColor: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))

const CustomAppBar = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(state => state.app.theme.mode)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <ThemeSwitch
          onChange={handleToggleTheme}
          checked={themeMode === 'light'}
          checkedIcon={<LightModeIcon />}
          icon={<DarkModeIcon />}
        />
        <Typography
          align="center"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Your App Name
        </Typography>
        <Button color="secondary" sx={{ pr: 2 }}>
          Login
        </Button>
        <Button color="secondary" variant="contained">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar
