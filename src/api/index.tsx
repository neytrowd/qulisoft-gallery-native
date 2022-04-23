import axios from 'axios';
import { appId, baseUrl } from '../constants/baseUrl';

export const api = axios.create({
   baseURL: baseUrl,
   params: {
      client_id: appId,
   },
});

export const getPhotos = async () => {
   const res = await api.get('/photos');
   return res.data;
};

export const getPhoto = async (id: string) => {
   const res = await api.get(`/photos/${id}`);
   return res.data;
};
