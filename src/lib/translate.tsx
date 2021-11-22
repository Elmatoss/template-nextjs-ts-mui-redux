import {
  useCallback,
  useMemo,
  useContext,
  useState,
  Children,
  createContext,
  FC,
} from 'react'

import Polyglot, { InterpolationOptions } from 'node-polyglot'

import enMessages from '../i18n/en.json'

/**
 *  MOSTLY COPIED FROM https://github.com/marmelab/react-admin/blob/master/packages/ra-core/src/i18n
 */

const getTranslate = (locale: string) => {
  const polyglot = new Polyglot({
    locale,
    phrases: { '': '', ...enMessages },
  })
  return polyglot.t.bind(polyglot)
}

interface TranslationContextInterface {
  locale: string
  setLocale: (newLocale: any) => any
  translate: (
    phrase: string,
    options?: number | InterpolationOptions | undefined
  ) => string
}

const TranslationContext = createContext<TranslationContextInterface>({
  locale: 'en',
  setLocale: () => {},
  translate: x => x,
})

// TranslationContext.displayName = 'TranslationContext'

export const TranslationProvider: FC = ({ children }) => {
  const [state, setState] = useState({
    locale: 'en',
    translate: getTranslate('en'),
  })

  const setLocale = useCallback(
    newLocale =>
      setState(state => ({
        ...state,
        locale: newLocale,
        translate: getTranslate(newLocale),
      })),
    [setState]
  )

  // Allow locale modification by including setLocale in the context
  // This can't be done in the initial state because setState doesn't exist yet
  const value = useMemo(
    () => ({
      ...state,
      setLocale,
    }),
    [setLocale, state]
  )

  return (
    <TranslationContext.Provider value={value}>
      {Children.only(children)}
    </TranslationContext.Provider>
  )
}

export const useSetLocale = () => {
  const { setLocale } = useContext(TranslationContext)
  return useCallback(setLocale, [setLocale])
}

export const useTranslate = () => {
  const { locale, translate } = useContext(TranslationContext)
  return useCallback(translate, [translate, locale])
}

export const useLocale = () => {
  const { locale } = useContext(TranslationContext)
  return locale
}
