import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import Images from "../../assets"; // Ensure this contains your back button image
import styles from "./style";

interface CustomHeaderProps {
  headerText: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ headerText }) => {
//   const navigation = useNavigation(); // Get navigation object

//   const goBack = () => {
//     if (navigation.canGoBack()) {
//       navigation.goBack(); // Go to the previous screen
//     }
//   };

  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Image source={Images.backbtn} style={styles.backImage} resizeMode="contain" />
      </TouchableOpacity>

      {/* Header Text */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

