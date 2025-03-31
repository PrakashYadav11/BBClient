import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../../components/CustomInput';
import Images from '../../../assets';
import { Strings } from '../../../shared/strings';
import CustomButton from '../../../components/CustomButton';
import styles from './style';
import OTPVerificationModal from '../../OtpVerificationModel'; // Import the modal

const SignUp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={Images.Signup} style={styles.background} resizeMode="cover">
      </ImageBackground>

      {/* Bottom Card */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>{Strings.signupTitle}</Text>

        {/* Custom Inputs */}
        <CustomInput placeholder={Strings.fname}/>
        <CustomInput placeholder={Strings.email}/>
        <CustomInput placeholder={Strings.mobile}/>
        <CustomInput placeholder={Strings.dummy}/>

        {/* Submit Button */}
        <View style={styles.btn}>
          <CustomButton 
            label={"Let's Get Started"} 
            onPress={() => setModalVisible(true)} // Open OTP Modal
          />
        </View>

        {/* Login Link */}
        <Text style={styles.footerText}>
          Already Have An Account?{" "}
          <TouchableOpacity>
            <Text style={styles.loginText}>Login Now</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* OTP Verification Modal */}
      <OTPVerificationModal 
        visible={isModalVisible} 
        onClose={() => setModalVisible(false)} 
        onSubmit={(otp) => {
          console.log("Entered OTP:", otp);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default SignUp;