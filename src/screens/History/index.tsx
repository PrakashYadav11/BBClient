import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import Images from '../../assets';
import CustomHeader from '../../components/CustomHeader';
import { ChatUsers } from '../../dummyData/ChatUsers';
import CustomChatCard from '../../components/CustomChatCard/Index';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader headerText={'History'} rightIcon={true} leftIcon={false} LeftIconImage={undefined} />

      {/* Search Input */}
      <View style={styles.inputContainer}>
        <Image source={Images.searchicon} style={styles.searchImg} />
        <TextInput placeholder="Search..." style={styles.input} placeholderTextColor="#999" />
      </View>

      {/* Chat List */}
      <FlatList
        data={ChatUsers}
        renderItem={({ item, index }) => <CustomChatCard item={item} index={index} onpress={()=>navigation.navigate(NavigationRoutes.historydetail,{data: item})}/>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default History;


