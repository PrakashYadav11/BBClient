import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import { Strings } from '../../shared/strings';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './style';


const AddAddress = () => {
  return (
    <View style={styles.container}>
      <CustomHeader headerText={Strings.addAddress} />
      <View style={styles.inputContainer}>
        <CustomInput placeholder={Strings.searchAdd}  />
        <CustomInput placeholder={Strings.company}  />
        <CustomInput placeholder={Strings.flooe}  />
        <CustomInput placeholder={Strings.tower} />
        <CustomInput placeholder={Strings.landmark}  />
        <CustomInput placeholder={Strings.mobile}  />
      </View>
      <View style={styles.buttonContainer}>
       <CustomButton label={'Save'} onPress={undefined}/>
      </View>
    </View>
  );
};

export default AddAddress;


