import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import styles from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../assets';
import {Strings} from '../../shared/strings';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {useNavigation} from '@react-navigation/native';

const BookingSucess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <CustomHeader headerText={'Checkout'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}  />

      <View style={styles.Container}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imgOuterContainer}>
            <View style={{alignItems: 'center'}}>
              <Image source={Images.success} style={styles.imgContainer} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{Strings.booking}</Text>
              <Text style={styles.text}>{Strings.success}</Text>
            </View>
          </View>
        </View>

        <View style={styles.ratingContainer}>
          <View>
            <Text style={styles.ratingText}>{Strings.rate}</Text>
          </View>
          <View style={styles.starImgContainer}>
            <Image source={Images.star} style={styles.startImg} />
            <Image source={Images.star} style={styles.startImg} />
            <Image source={Images.star} style={styles.startImg} />
            <Image source={Images.blanckstar} style={styles.startImg} />
            <Image source={Images.blanckstar} style={styles.startImg} />
          </View>
          <View style={styles.input}>
            <CustomInput placeholder={'Review'} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label={'Continue'}
          onPress={() => navigation.navigate(NavigationRoutes.bottom)}
        />
      </View>
    </View>
  );
};

export default BookingSucess;
