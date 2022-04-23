import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { selectPhoto } from '../../store/selectors/photo';
import styles from './photo.style';
import { useRoute } from '@react-navigation/native';
import { loadPhoto } from '../../store/thunks/photoThunk';
import ResponseStatus from '../../components/response-status';

interface IParams {
   id: string;
}

const Photo = () => {
   const { params } = useRoute();
   const dispatch = useAppDispatch();
   const { photo, loading, error } = useAppSelector(selectPhoto);

   useEffect(() => {
      let { id } = params as IParams;
      if (id) {
         dispatch(loadPhoto(id));
      }
   }, []);

   return (
      <View style={styles.root}>
         <View>{!loading && <Image style={styles.photo} source={{ uri: photo?.urls?.regular }} />}</View>
         <ResponseStatus error={error} loading={loading} />
      </View>
   );
};

export default Photo;
