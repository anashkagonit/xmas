import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { carouselSlice } from './carousel/carousel.slice'

import { cartSlice } from './cart/cart.slice'

const persistConfig = {
  key: 'xmas-shop',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
  carousel: carouselSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
