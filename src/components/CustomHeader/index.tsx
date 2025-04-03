import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import Images from "../../assets"; 
import styles from "./style";

interface CustomHeaderProps {
  headerText: string;
  rightIcon: boolean;
  leftIcon: boolean;
  LeftIconImage?: any; // Optional custom left icon image
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ headerText, rightIcon, leftIcon, LeftIconImage }) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Left Icon (Back Button) */}
      {leftIcon && (
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Image 
            source={LeftIconImage || Images.backbtn} // Use passed LeftIconImage, else default to back button
            style={styles.backImage} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      )}

      {/* Header Text */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>

      {/* Right Icon (Headphone) */}
      {rightIcon && (
        <TouchableOpacity style={styles.rightButton}>
          <Image 
            source={Images.headphone} 
            style={styles.backImage} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
