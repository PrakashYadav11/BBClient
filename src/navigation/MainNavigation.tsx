import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { NavigationRoutes } from '../shared/NavigationRoutes';
import BootamTabNavigation from './BootamTabNavigation';
import React from 'react'
import OnBording from '../screens/OnBording';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserType from '../screens/UserType';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={NavigationRoutes.onbording}>
        <Stack.Screen name={NavigationRoutes.onbording} component={OnBording}/>
        <Stack.Screen name={NavigationRoutes.usertype} component={UserType}/>
        <Stack.Screen name={NavigationRoutes.signup} component={SignUp}/>
        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigation
