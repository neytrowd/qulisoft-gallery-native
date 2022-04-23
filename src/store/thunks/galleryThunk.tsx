import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPhotos } from '../../api';

export const loadGallery = createAsyncThunk('gallery/loadPhotos', async (params, thunkApi) => {
   try {
      return await getPhotos();
   } catch (e) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
