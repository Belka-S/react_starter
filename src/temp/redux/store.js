import { configureStore } from '@reduxjs/toolkit';
import { imgFinderReducer } from './imgFinder/slice';
// import { imgFinderReducer } from './imgFinder/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE } from 'redux-persist';
import { PERSIST, PURGE, REGISTER } from 'redux-persist';

// ----------------persistReducer---------------- //

const persistConfig = {
  key: 'imgFinder',
  storage,
  blacklist: ['error'],
};
const persistedImgReducer = persistReducer(persistConfig, imgFinderReducer);

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: { imgFinder: persistedImgReducer }, // imgFinderReducer
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
