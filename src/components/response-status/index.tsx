import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './response-status.style';
import { ResponseStatusProps } from './response-status.props';

const ResponseStatus: React.FC<ResponseStatusProps> = ({ loading, error }) => {
   return (
      <View>
         {(!!error || loading) && (
            <View style={styles.status}>
               <Image style={styles.statusImage} source={require('../../assets/images/adaptive-icon.png')} />
               {loading && <Text style={styles.message}>Loading...</Text>}
               {!!error && <Text style={styles.message}>{error}</Text>}
            </View>
         )}
      </View>
   );
};

export default ResponseStatus;
