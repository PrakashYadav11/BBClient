import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { NavigationRoutes } from '../shared/NavigationRoutes';
import BootamTabNavigation from './BootamTabNavigation';
import React from 'react'
import OnBording from '../screens/OnBording';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserType from '../screens/UserType';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import LoginOtpVerification from '../screens/auth/LoginOtpVerification';
import CarMechanic from '../screens/CarMechanic';
import AddAddress from '../screens/AddAddress';
import ManageAddress from '../screens/ManageAddress';
import Details from '../screens/Details';
import Checkout from '../screens/Checkout';
import SelectDate from '../screens/SelectDate';
import EditProfile from '../screens/EaditProfile';
import TermsCondition from '../screens/TermsCondition';
import Help from '../screens/Help';
import FAQs from '../screens/FAQs';
import PaymentSummary from '../screens/PaymentSummary';
import BookingSucess from '../screens/BookingSuccess';
import ChatDetail from '../screens/Chats/ChatDetail';
import HistoryDetails from '../screens/HistoryDetail';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={NavigationRoutes.onbording}>
        <Stack.Screen name={NavigationRoutes.onbording} component={OnBording}/>
        <Stack.Screen name={NavigationRoutes.usertype} component={UserType}/>
        <Stack.Screen name={NavigationRoutes.signup} component={SignUp}/>
        <Stack.Screen name={NavigationRoutes.login} component={Login}/>
        <Stack.Screen name={NavigationRoutes.loginotpverification} component={LoginOtpVerification}/>
        <Stack.Screen name={NavigationRoutes.addaddress} component={AddAddress}/>
        <Stack.Screen name={NavigationRoutes.manageaddress} component={ManageAddress}/>
        <Stack.Screen name={NavigationRoutes.carmechanic} component={CarMechanic}/>
        <Stack.Screen name={NavigationRoutes.detail} component={Details}/>
        <Stack.Screen name={NavigationRoutes.checkout} component={Checkout}/>
        <Stack.Screen name={NavigationRoutes.selectdate} component={SelectDate}/>
        <Stack.Screen name={NavigationRoutes.paymentsummary} component={PaymentSummary}/>
        <Stack.Screen name={NavigationRoutes.bookingsuccess} component={BookingSucess}/>
        <Stack.Screen name={NavigationRoutes.eaditProfile} component={EditProfile}/>
        <Stack.Screen name={NavigationRoutes.termscondition} component={TermsCondition}/>
        <Stack.Screen name={NavigationRoutes.help} component={Help}/>
        <Stack.Screen name={NavigationRoutes.faqs} component={FAQs}/>
        <Stack.Screen name={NavigationRoutes.ChatDetail} component={ChatDetail}/>
        <Stack.Screen name={NavigationRoutes.historydetail} component={HistoryDetails}/>
        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigation
