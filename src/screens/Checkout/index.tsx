import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import { Strings } from '../../shared/strings';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import Images from '../../assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader headerText={Strings.checkout} onPress={()=>navigation.navigate(NavigationRoutes.detail)}/>

      {/* Service Info Section */}
      <View style={styles.serviceInfo}>
        <Image
          source={Images.imgfour}
          style={styles.serviceImage}
        />
        <View style={styles.serviceDetails}>
          <Text style={styles.serviceTitle}>{Strings.mechanic}</Text>
          <Text style={styles.servicePrice}>$250.25</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={fontPixel(16)} color="#FFD700" />
            <Text style={styles.ratingText}>4.3</Text>
          </View>
        </View>
      </View>

      {/* Upload Sections */}
      <Text style={styles.sectionTitle}>{Strings.addVehicleInfo}</Text>

      <Text style={styles.uploadTitle}>{Strings.addVehicleImg}</Text>
      {/* Upload Vehicle Images (Two Camera Buttons) */}
      <View style={styles.vehicleImagesContainer}>
        <TouchableOpacity style={styles.uploadPhoto}>
          <Image
            source={Images.camera}
            style={styles.camera}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadPhoto}>
          <Image
            source={Images.camera}
            style={styles.camera}
          />
        </TouchableOpacity>
      </View>

      {/* Upload Driving License */}
      <Text style={styles.uploadTitle}>{Strings.uploadLicense}</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Image
          source={Images.pdfupload}
          style={styles.uploadImage}
        />
      </TouchableOpacity>

      {/* Upload Vehicle Insurance */}
      <Text style={styles.uploadTitle}>{Strings.uploadInsurance}</Text>
      <TouchableOpacity style={styles.uploadContainer}>
        <Image
          source={Images.pdfupload}
          style={styles.uploadImage}
        />
      </TouchableOpacity>

      {/* Continue Button */}
      <View style={styles.btn}>

      <CustomButton label={'Continue'} onPress={()=>navigation.navigate(NavigationRoutes.selectdate)}/>
      </View>
    </View>
  );
};



export default Checkout;