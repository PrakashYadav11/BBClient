import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import { Strings } from '../../shared/strings';
import Images from '../../assets';
import { times } from '../../dummyData/time';
import { dates } from '../../dummyData/date';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const SelectDate = () => {
  const [selectedDate, setSelectedDate] = useState('4'); 
  const [selectedTime, setSelectedTime] = useState('2');

  // Render date item
  const renderDateItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dateItem,
        item.id === selectedDate && styles.selectedDateItem,
      ]}
      onPress={() => setSelectedDate(item.id)}
    >
      <Text style={[styles.dayText, item.id === selectedDate && styles.selectedText]}>{item.day}</Text>
      <Text style={[styles.dateText, item.id === selectedDate && styles.selectedText]}>{item.date}</Text>
    </TouchableOpacity>
  );

  // Render time item
  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeItem,
        item.id === selectedTime && styles.selectedTimeItem,
      ]}
      onPress={() => setSelectedTime(item.id)}
    >
      <Text style={[styles.timeText, item.id === selectedTime && styles.selectedText]}>{item.time}</Text>
    </TouchableOpacity>
  );
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader headerText={Strings.checkout} rightIcon={false} leftIcon={true} LeftIconImage={undefined}  />

      {/* Date Selection Section */}
      <Text style={styles.sectionTitle}>Please choose date and time</Text>

      <TouchableOpacity style={styles.selectDateButton}>
        <Image source={Images.selectdate} style={styles.selectDate} />
      </TouchableOpacity>

      {/* Date List */}
      <View style={styles.dateContainer}>
        <FlatList
          data={dates}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        />
      </View>

      {/* Time Grid */}
      <FlatList
        data={times}
        renderItem={renderTimeItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2 items per row
        columnWrapperStyle={styles.timeRow}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.timeList}
      />

      {/* Submit Button */}
      <View style={styles.btn}>
      <CustomButton label={'Submit'} onPress={()=>navigation.navigate(NavigationRoutes.paymentsummary)}/>
      </View>
    </View>
  );
};


export default SelectDate;