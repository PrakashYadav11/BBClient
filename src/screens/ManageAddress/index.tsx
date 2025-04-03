import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import globalStyles from '../../shared/theme/globalStyles';

import Images from '../../assets';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import { Strings } from '../../shared/strings';


const addresses = [
  {
    id: '1',
    type: 'Home',
    address: 'D-1111, 11th Floor, D Block, TITANIUM CITY CENTER, 100 Feet Anand Nagar Rd, Ahmedabad, Gujarat 380015, India',
    icon: Images.homeicon,
  },
  {
    id: '2',
    type: 'Office',
    address: 'D-1111, 11th Floor, D Block, TITANIUM CITY CENTER, 100 Feet Anand Nagar Rd, Ahmedabad, Gujarat 380015, India',
    icon: Images.businessicon,
  },
];

const ManageAddress = () => {
  const renderItem = ({ item }) => (
    <View style={styles.addressCard}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.addressType}>{item.type}</Text>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <View style={globalStyles.containerBg}>
      <CustomHeader headerText={'Manage Address'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}/>
      <TouchableOpacity style={styles.addAddressButton}>
        <Text style={styles.addAddressText}>{Strings.plusaddAddress}</Text>
      </TouchableOpacity>
      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <CustomButton label={'Continue'} onPress={undefined}/>
    </View>
  );
};



export default ManageAddress;
