import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 
import globalStyles from '../../../shared/theme/globalStyles';
import Images from '../../../assets';
import { Strings } from '../../../shared/strings';
import styles from './style';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = Images.OTP;

const LoginOtpVerification = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground
      source={backgroundImage}
      style={[globalStyles.container, styles.background]}
      resizeMode="cover"
    >
      <LinearGradient colors={['#0000fe', '#7575ff']} style={styles.card}>
        <Text style={styles.title}>{Strings.verificationText}</Text>
        <Text style={styles.subtitle}>{Strings.otpsent}</Text>
        
        <View style={styles.otpContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput key={index} style={styles.otpInput} maxLength={1} keyboardType="number-pad" />
          ))}
        </View>

        <Text style={styles.timer}>00:15</Text>
        <Text style={styles.resendText}>{Strings.getotp}</Text>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendButtonText}>{Strings.sendotp}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(NavigationRoutes.bottom)}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default LoginOtpVerification;

