import { IPhoto } from '../../types/photo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadGallery } from '../thunks/galleryThunk';

interface GalleryState {
   photos: IPhoto[];
   loading: boolean;
   error: string;
}

const initialState: GalleryState = {
   photos: [],
   loading: false,
   error: '',
};

const gallerySlice = createSlice({
   name: 'gallery',
   initialState,
   reducers: {},
   extraReducers: {
      [loadGallery.pending.type]: (state) => {
         state.loading = true;
      },
      [loadGallery.rejected.type]: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.error = action.payload;
      },
      [loadGallery.fulfilled.type]: (state, action: PayloadAction<IPhoto[]>) => {
         state.loading = false;
         state.error = '';
         state.photos = action.payload;
      },
   },
});

export default gallerySlice.reducer;
// export const {} = gallerySlice.actions;
