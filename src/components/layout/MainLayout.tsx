import { FC } from 'react'
import { Container } from '@mui/material'
import CustomAppBar from '../common/CustomAppBar'

const MainLayout: FC = ({ children }) => (
  <>
    <CustomAppBar />
    <Container maxWidth="md">{children}</Container>
  </>
)

export default MainLayout
