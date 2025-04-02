import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Images from '../../assets';
import {Strings} from '../../shared/strings';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {useNavigation} from '@react-navigation/native';
import CustomServiceCard from '../../components/CustomServiceCard';
import { servicesData } from '../../dummyData/servicesData';
import styles from './style';


const Details = () => {
  const navigation = useNavigation();
  const renderServiceItem = ({ item }) => (
    <CustomServiceCard
      image={item.image}
      name={item.name}
      price={item.price}
      rating={item.rating}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.bottom)}>
          <Image source={Images.backbtn} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{Strings.detail}</Text>
        <TouchableOpacity>
          <Image source={Images.cart} style={styles.back} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={Images.electricimg} style={styles.image} />
      </View>
      <Text style={styles.sectionTitle}>{Strings.easygo}</Text>
      <Text style={styles.desc}>{Strings.serviceDesc}</Text>

      <Text style={styles.sectionTitle}>{Strings.services}</Text>

        <FlatList
                data={servicesData}
                renderItem={renderServiceItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} 
                columnWrapperStyle={styles.serviceRow}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.serviceList}
              />
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.amount}>Amount : $89</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.checkout)}>
        <Image source={Images.viewcart} style={styles.img}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;


