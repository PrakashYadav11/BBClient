import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../../assets";
import CustomButton from "../../components/CustomButton";
import styles from "./style";
import { Strings } from "../../shared/strings";
import { NavigationRoutes } from "../../shared/NavigationRoutes";
import { useNavigation } from "@react-navigation/native";


const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={Images.loginbanner} style={styles.background} resizeMode="cover" />

      {/* Bottom Card Section */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>{Strings.title}</Text>
        <Text style={styles.description}>
          {Strings.desc}
        </Text>

        {/* Progress Indicator */}
        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, styles.activeIndicator]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        {/* Gradient Next Button */}
        <CustomButton label={"Next"} onPress={()=>navigation.navigate(NavigationRoutes.usertype)}/>
      </View>
    </View>
  );
};

export default OnboardingScreen;


