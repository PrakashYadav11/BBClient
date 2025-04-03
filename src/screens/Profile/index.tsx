import { Image, Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import CustomHeader from '../../components/CustomHeader';
import Images from '../../assets';
import { Strings } from '../../shared/strings';
import Options from '../../components/Options';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader headerText={'Profile'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}  />

      <View>
        <View style={styles.profileContainer}>
          {/* Gradient Background */}
          <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
            <Defs>
              <LinearGradient id="gradProfile" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0" stopColor="rgba(0, 0, 254, 1)" stopOpacity="1" />
                <Stop offset="1" stopColor="rgba(117, 117, 255, 1)" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradProfile)" rx="25" />
          </Svg>

          {/* Profile Image */}
          <View style={styles.profileInContainer}>
            <View>
              <Image source={Images.profileImg} style={styles.profileImg} />
            </View>
          </View>

          {/* Name */}
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{Strings.profilename}</Text>
          </View>
        </View>
      </View>

      <View style={styles.optionsCon}>
        <Options text="Edit Profile" url={Images.profileIcon} onPress={() => navigation.navigate(NavigationRoutes.eaditProfile)} />
        <View style={styles.divider}></View>
        <Options text="Terms & Conditions" url={Images.doc} onPress={() => navigation.navigate(NavigationRoutes.termscondition)} />
        <View style={styles.divider}></View>
        <Options text="Help" url={Images.hands} onPress={() => navigation.navigate(NavigationRoutes.help)} />
        <View style={styles.divider}></View>
        <Options text="Logout" url={Images.logout} onPress={() => setModalVisible(true)} />
      </View>

      {/* Logout Confirmation Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure to log out?</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.logoutButton} onPress={() =>navigation.navigate(NavigationRoutes.login)}>
                <Text style={styles.logoutText}>Yes, Logout</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default Profile;
