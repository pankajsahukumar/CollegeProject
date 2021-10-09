import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userreducer from './Slices/userSlice';
import postreducer from './Slices/postSlice';
import userreducer2 from './Slices/userSlice2';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootreducers = combineReducers({
    user:userreducer,
    post:postreducer,
    user2:userreducer2,
});
const persistedReducer = persistReducer(persistConfig, rootreducers);
export default configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

