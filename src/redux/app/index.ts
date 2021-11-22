import { combineReducers } from 'redux'

import themeReducer from './theme'
import snackbarReducer from './snackbar'

// List of all app reducers
const appReducerList = {
  theme: themeReducer,
  snackbar: snackbarReducer,
}

/**
 * The app reducer just combines all sub reducers
 */
const appReducer = combineReducers(appReducerList)

export default appReducer
