import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appSetting from './slices/appSetting'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const appSettingPersistConfig = {
  key: 'app-setting',
  storage,
  preffixKey: 'redux-'
}

export const makeStore = () => {
  const isSSR = typeof window === 'undefined'
  if (isSSR) {
    return configureStore({
      reducer: {
        appSetting
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          },
        })
    })
  } else {
    return configureStore({
      reducer: combineReducers({
        appSetting: persistReducer(appSettingPersistConfig, appSetting)
      }),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false
        })
    })
  }
}



// *Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// *Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']