import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { PersistGate } from 'redux-persist/integration/react'
import { EmotionCache } from '@emotion/utils'

import store, { persistor } from '../redux'
import createEmotionCache from '../lib/createEmotionCache'
import MainLayout from '../components/layout/MainLayout'
import CustomThemeProvider from '../theme'
import { TranslationProvider } from '../lib/translate'
import CustomSnackbar from '../components/common/CustomSnackbar'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export type CustomAppProps = AppProps & { emotionCache: EmotionCache }

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Your App Name</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TranslationProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <MainLayout>
              <Component {...pageProps} />
              <CustomSnackbar />
            </MainLayout>
          </CustomThemeProvider>
        </TranslationProvider>
      </PersistGate>
    </Provider>
  </CacheProvider>
)

export default MyApp
