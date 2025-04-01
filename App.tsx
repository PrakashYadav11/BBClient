import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './src/navigation/MainNavigation'
import Login from './src/screens/auth/Login'
import LoginOtpVerification from './src/screens/auth/LoginOtpVerification'



const App = () => {
  return (
    <MainNavigation/>
    // <LoginOtpVerification/>
  )
}

export default App

const styles = StyleSheet.create({})