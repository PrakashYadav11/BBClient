import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../../assets";
import CustomButton from "../../components/CustomButton";
import styles from "./style";
import { Strings } from "../../shared/strings";
import { NavigationRoutes } from "../../shared/NavigationRoutes";
import { useNavigation } from "@react-navigation/native";


const UserType = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={Images.loginbanner} style={styles.background} resizeMode="cover" />

      {/* Bottom Card Section */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>{Strings.usertypeText}</Text>

        {/* Gradient Next Button */}
        <View style={styles.buttons}>
        <CustomButton label={"Worker"} onPress={()=>navigation.navigate(NavigationRoutes.signup)} width={150}/>
        <CustomButton label={"Customer"} onPress={()=>navigation.navigate(NavigationRoutes.signup)} width={150}/>
        </View>
      </View>
    </View>
  );
};

export default UserType;


