import React, { useState } from "react";
import { 
  Modal, View, Text, TouchableOpacity, StyleSheet, TextInput 
} from "react-native";
import CustomButton from "../../components/CustomButton";
import styles from "./style";

interface OTPVerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
}

const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({ visible, onClose, onSubmit }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOTPChange = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.subtitle}>OTP has been sent to +1234567890</Text>

          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                value={value}
                onChangeText={(text) => handleOTPChange(text, index)}
              />
            ))}
          </View>

          {/* Countdown Timer */}
          <Text style={styles.timer}>00:15</Text>

          {/* Resend OTP */}
          <Text style={styles.resendText}>
            Didn’t Get OTP? <Text style={styles.resendLink}>Resend</Text>
          </Text>

          {/* Submit Button */}
         <CustomButton label={"Submit"} onPress={undefined}/>

          {/* Close Modal */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OTPVerificationModal;


