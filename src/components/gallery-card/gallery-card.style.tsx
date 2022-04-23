import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   root: {
      flex: 1 / 2.1,
      marginBottom: 20,
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.07)',
      shadowOffset: { width: 10, height: 16 },
      elevation: 8,
      backgroundColor: '#fff',
      overflow: 'hidden',
   },
   photo: {
      width: '100%',
      height: 150,
   },
   data: {
      padding: 5,
   },
   info: {
      textAlign: 'center',
   },
});

export default styles;
