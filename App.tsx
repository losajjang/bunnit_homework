import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calendar, Library, MyPage} from './src/pages/index';

export type LoggedInParamList = {
  Home: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} options={{title: 'HOME'}} />
        <Tab.Screen
          name="calendar"
          component={Calendar}
          options={{
            title: 'CALENDAR',
          }}
        />
        <Tab.Screen
          name="library"
          component={Library}
          options={{title: 'LIBRARY'}}
        />
        <Tab.Screen
          name="myPage"
          component={MyPage}
          options={{title: 'MY PAGE'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
