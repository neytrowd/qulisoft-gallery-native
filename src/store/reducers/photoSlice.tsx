import { IPhoto } from '../../types/photo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadPhoto } from '../thunks/photoThunk';

interface PhotoState {
   photo: IPhoto | null;
   loading: boolean;
   error: string;
}

const initialState: PhotoState = {
   photo: null,
   loading: false,
   error: '',
};

const photoSlice = createSlice({
   name: 'photo',
   initialState,
   reducers: {},
   extraReducers: {
      [loadPhoto.pending.type]: (state) => {
         state.loading = true;
      },
      [loadPhoto.rejected.type]: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.error = action.payload;
      },
      [loadPhoto.fulfilled.type]: (state, action: PayloadAction<IPhoto>) => {
         state.loading = false;
         state.error = '';
         state.photo = action.payload;
      },
   },
});

export default photoSlice.reducer;
// export const {} = photoSlice.actions;
