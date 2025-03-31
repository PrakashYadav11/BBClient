import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Svg, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../../shared/NavigationRoutes';

interface ButtonProps {
  label: string;
  onPress:any;
  width?: number; // Optional width prop
}

const CustomButton = ({ label, onPress, width = 290 }: ButtonProps) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.nextButton, { width: widthPixel(width) }]} onPress={onPress}>
      <Svg height={heightPixel(52)} width={widthPixel(width)}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="rgba(0, 0, 254, 1)" stopOpacity="1" />
            <Stop offset="1" stopColor="rgba(117, 117, 255, 1)" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" rx="25" fill="url(#grad)" />
      </Svg>
      <Text style={styles.nextButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
