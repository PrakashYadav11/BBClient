import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './style';


interface InputProps {
    placeholder: string;
  }

const CustomInput = ({ placeholder }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input}/>
    </View>
  )
}

export default CustomInput

