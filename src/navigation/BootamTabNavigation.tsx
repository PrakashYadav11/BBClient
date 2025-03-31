import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationRoutes } from '../shared/NavigationRoutes';
import Home from '../screens/Home';
import Images from '../assets';
import Chats from '../screens/Chats';
import History from '../screens/History';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const iconSize = width * 0.07;


const BootamTabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
        <Tab.Screen
        name={NavigationRoutes.home}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.home}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.chats}
        component={Chats}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.chats}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.history}
        component={History}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.history}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.profile}
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.user}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BootamTabNavigation