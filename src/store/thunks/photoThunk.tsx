import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPhoto } from '../../api';

export const loadPhoto = createAsyncThunk('photo/loadPhoto', async (id: string, thunkApi) => {
   try {
      return await getPhoto(id);
   } catch (e) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
