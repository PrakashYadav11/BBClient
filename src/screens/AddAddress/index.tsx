import { StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../components/CustomHeader';
import { Strings } from '../../shared/strings';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';
import Images from '../../assets';


const AddAddress = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate(NavigationRoutes.bottom);
    },200);
  };

  return (
    <View style={styles.container}>
      <CustomHeader headerText={Strings.addAddress} rightIcon={false} leftIcon={true} LeftIconImage={undefined} />
      <View style={styles.inputContainer}>
        <CustomInput placeholder={Strings.searchAdd} />
        <CustomInput placeholder={Strings.company} />
        <CustomInput placeholder={Strings.flooe} />
        <CustomInput placeholder={Strings.tower} />
        <CustomInput placeholder={Strings.landmark} />
        <CustomInput placeholder={Strings.mobile} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label={'Save'} onPress={handleSave} />
      </View>

      {/* Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.iconContainer}>
              <Image source={Images.addressSuccess} style={styles.successImage}/>
            </View>
            <Text style={styles.modalText}>Address Added Successfully</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddAddress;
