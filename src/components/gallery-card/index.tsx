import React from 'react';
import styles from './gallery-card.style';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GalleryCardProps } from './gallery-card.props';
import { useNavigation } from '@react-navigation/native';

const GalleryCard: React.FC<GalleryCardProps> = ({ data }) => {
   const { id, urls, user } = data;
   const navigation = useNavigation();

   const pressHandler = () => {
      navigation.navigate('Photo', { id });
   };

   return (
      <View style={styles.root}>
         <TouchableOpacity activeOpacity={0.6} onPress={pressHandler}>
            <View>
               <Image style={styles.photo} source={{ uri: urls?.regular }} />
            </View>
            <View style={styles.data}>
               <Text style={styles.info}>{user?.username}</Text>
               <Text style={styles.info}>{user?.first_name}</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default GalleryCard;
