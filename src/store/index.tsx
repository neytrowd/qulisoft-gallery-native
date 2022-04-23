import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gallerySlice from './reducers/gallerySlice';
import photoSlice from './reducers/photoSlice';

const rootReducer = combineReducers({
   gallery: gallerySlice,
   photo: photoSlice,
});

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
