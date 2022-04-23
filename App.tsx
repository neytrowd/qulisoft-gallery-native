import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gallery from './src/screens/gallery';
import Photo from './src/screens/photo';

export type RootStackParams = {
   Gallery: undefined;
   Photo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <RootStack.Navigator
               initialRouteName='Gallery'
               screenOptions={{
                  animation: 'slide_from_right'
               }}
            >
               <RootStack.Screen name='Gallery' component={Gallery} />
               <RootStack.Screen name='Photo' component={Photo} />
            </RootStack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}
