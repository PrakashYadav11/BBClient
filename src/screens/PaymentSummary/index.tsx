import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import { Strings } from '../../shared/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import Images from '../../assets';
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import globalStyles from '../../shared/theme/globalStyles';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const PaymentSummary = () => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.containerBg, styles.container]}>
      <CustomHeader headerText={Strings.checkout} onPress={()=>navigation.navigate(NavigationRoutes.selectdate)}/>
      
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Payment Summary</Text>
        
        <View style={styles.row}><Text style={styles.label}>Item total</Text><Text style={styles.value}>$89.00</Text></View>
        <View style={styles.row}><Text style={styles.label}>Taxes and Fee</Text><Text style={styles.value}>$1.00</Text></View>
        <View style={[styles.row, styles.totalRow]}><Text style={styles.totalLabel}>Total</Text><Text style={styles.totalValue}>$90.00</Text></View>
        
        <View style={styles.infoRow}><Ionicons name="location-outline" size={20} color="black" /><Text style={styles.text} numberOfLines={1}>Home - Block 1A Street 72, Omaxe...</Text><Feather name="external-link" size={18} color="gray" /></View>
        <View style={styles.infoRow}><Ionicons name="time-outline" size={20} color="black" /><Text style={styles.text}>Sat, Nov 09 - 01:30 PM</Text><Feather name="external-link" size={18} color="gray" /></View>
      
        <View style={styles.paymentContainer}>
          <Image source={Images.cashonDel} style={styles.paymentIcon} />
          <View>
            <Text style={styles.paymentLabel}>Pay via</Text>
            <Text style={styles.paymentText}>Pay After Service</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButton label={'Continue'} onPress={()=>navigation.navigate(NavigationRoutes.bookingsuccess)} width={widthPixel(350)} />
      </View>
    </View>
  );
};

export default PaymentSummary;


