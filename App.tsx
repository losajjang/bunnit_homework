import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calendar, Library, MyPage} from './src/pages/index';

export type LoggedInParamList = {
  Home: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}

export default App;
