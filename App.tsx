import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calendar, Library, MyPage} from './src/pages/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export type LoggedInParamList = {
  Home: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: 'HOME',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="home" size={30} />
              ) : (
                <Ionicons name="home-outline" size={20} />
              ),
          }}
        />
        <Tab.Screen
          name="calendar"
          component={Calendar}
          options={{
            title: 'CALENDAR',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="calendar" size={30} />
              ) : (
                <Ionicons name="calendar-outline" size={20} />
              ),
          }}
        />
        <Tab.Screen
          name="library"
          component={Library}
          options={{
            title: 'LIBRARY',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="barbell" size={30} />
              ) : (
                <Ionicons name="barbell-outline" size={20} />
              ),
          }}
        />
        <Tab.Screen
          name="myPage"
          component={MyPage}
          options={{
            title: 'MY PAGE',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="person" size={30} />
              ) : (
                <Ionicons name="person-outline" size={20} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
