import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styles from './gallery.style';
import GalleryCard from '../../components/gallery-card';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { loadGallery } from '../../store/thunks/galleryThunk';
import { selectGallery } from '../../store/selectors/gallery';
import ResponseStatus from '../../components/response-status';

const Gallery: React.FC = () => {
   const dispatch = useAppDispatch();
   const { photos, loading, error } = useAppSelector(selectGallery);

   useEffect(() => {
      dispatch(loadGallery());
   }, []);

   return (
      <View style={styles.root}>
         <View>
            {!loading && (
               <FlatList
                  numColumns={2}
                  data={photos}
                  columnWrapperStyle={styles.list}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <GalleryCard key={item.id} data={item} />}
               />
            )}
         </View>
         <ResponseStatus error={error} loading={loading} />
      </View>
   );
};

export default Gallery;
