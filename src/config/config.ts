const devEnv = process.env.NODE_ENV === 'development'

export const getApiBaseUrl = () =>
  devEnv ? 'http://localhost:3001' : 'STAGING URL'

const config = {
  appName: 'Your App Name',
  version: '0.0.0',
  devEnv,
}

export default config
