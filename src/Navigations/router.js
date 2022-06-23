import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../Containers/SplashScreen';
import {HomeScreen} from '../Containers/HomeScreen';
import {ExchangeScreen} from '../Containers/ExchangeScreen';
import {ChartScreen} from '../Containers/ChartScreen';

const Stack = createStackNavigator();
// export const navigationRef = React.createRef();
const RouterComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Exchange"
          component={ExchangeScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen
          name="Chart"
          component={ChartScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterComponent;
