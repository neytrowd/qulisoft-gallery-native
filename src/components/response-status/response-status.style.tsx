import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
   status: {
      height: Dimensions.get('window').height - 100,
      justifyContent: 'center',
      alignItems: 'center',
   },
   statusImage: {
      width: 150,
      height: 150,
      marginHorizontal: 'auto',
   },
   message: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 20,
      marginTop: 15,
   },
});

export default styles;
