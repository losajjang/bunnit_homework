import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calendar, Library, MyPage} from './src/pages/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export type pageType = {
  Home: undefined;
  Calendar: undefined;
  Library: undefined;
  MyPage: undefined;
};

const Tab = createBottomTabNavigator();

// 현재 네비게이팅 중인 페이지는 삼항연산자를 이용해 아이콘모양과 크기를 변경하여
// 어떤 페이지에 있는지 확인 할 수 있게 함.
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
