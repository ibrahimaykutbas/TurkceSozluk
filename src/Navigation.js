import React from 'react';

import {TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from './screens/Search/Search';
import History from './screens/History/History';
import Favorite from './screens/Favorite/Favorite';
import Detail from './screens/Detail/Detail';

import TabBar from './components/TabBar/TabBar';
import colors from './utils/color';

import LeftIcon from './icons/left.svg';
import MoreIcon from './icons/more.svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route, navigation}) => {
          return {
            title: 'Detay',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.softRed,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftIcon color={colors.textDark} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MoreIcon color={colors.textDark} />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={props => <TabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
