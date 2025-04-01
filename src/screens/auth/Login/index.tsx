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
import { NavigationRoutes } from '../../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';
import styles from './style';


const backgroundImage = Images.OTP; 

const Login = () => {
    const navigation = useNavigation();
  return (
    
    <ImageBackground
      source={backgroundImage}
      style={[globalStyles.container, styles.gradientContainer]}
      resizeMode="cover" 
    >
      {/* <Text style={[globalStyles.caption_24_700, styles.logo]}>Logo</Text> */}

      {/* Welcome Text */}
      {/* <Text style={[globalStyles.caption_16_400, styles.welcomeText]}>
        Hello, welcome to our app!
      </Text> */}

      {/* Card for Phone Number Input */}
      <LinearGradient
        colors={['#0000fe', '#7575ff']} 
        style={[globalStyles.authCard, styles.card]}
      >
        <Text style={[globalStyles.caption_24_700, styles.title]}>
          {Strings.phone}
        </Text>
        <Text style={[globalStyles.caption_14_400, styles.subtitle]}>
            {Strings.info}
        </Text>

        {/* Phone Number Input */}
        <View style={[globalStyles.rowCenter, styles.inputContainer]}>
          <Text style={[globalStyles.caption_14_400, styles.countryCode]}>+91</Text>
          <TextInput
            placeholder={Strings.phone}
            style={[globalStyles.caption_14_400, styles.input]}
            keyboardType="phone-pad"
            placeholderTextColor={'grey'} 
          />
        </View>

        {/* Get Verification Code Button */}
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(NavigationRoutes.loginotpverification)}>
          <Text style={[globalStyles.caption_16_700, styles.buttonText]}>
            {Strings.verification}
          </Text>
        </TouchableOpacity>

          {/* Sign Up Link */}
      <Text style={[globalStyles.caption_14_400, styles.signUpText]}>
        {Strings.newhere}{' '}
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.signup)}>
            <Text style={styles.signUpLink}>{Strings.signup}</Text>
        </TouchableOpacity>
      </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;

