import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import AddressModel from '../AddressModel';
import CustomServiceCard from '../../components/CustomServiceCard';
import { servicesData } from '../../dummyData/servicesData';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import Images from '../../assets';
import { categories } from '../../dummyData/categories';
import styles from './style';
import { Strings } from '../../shared/strings';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Render category item
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={()=>navigation.navigate(NavigationRoutes.carmechanic)}>
      <View style={styles.categoryIconContainer}>
        <Image source={item.image} style={styles.categoryIcon} />
      </View>
    </TouchableOpacity>
  );

  // Render recommended service item (horizontal FlatList)
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => setModalVisible(true)}
        >
          <Image source={Images.mappoint} style={{width:15,height:20}}/>
          <Text style={styles.locationText}>{Strings.location}</Text>
          <Icon name="arrow-drop-down" size={fontPixel(20)} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={Images.cart} style={{width:27,height:27}}/>
        </TouchableOpacity>
      </View>

      {/* Address Modal */}
      <AddressModel
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        userName="Michel"
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={fontPixel(20)}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
        <Image source={Images.filter} style={styles.filter}/>
      </View>
      <ScrollView>
      {/* Categories Section */}
      <View>
      <Text style={styles.sectionTitle}>{Strings.categori}</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // 3 items per row
        columnWrapperStyle={styles.categoryRow}
        scrollEnabled={false}
      />
      </View>
      <View>
      {/* Recommended Services Section (Horizontal FlatList) */}
      <Text style={styles.sectionTitle}>{Strings.recomanded}</Text>
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Horizontal scrolling
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.serviceList}
      />
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Horizontal scrolling
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.serviceList}
      />
      </View>
      </ScrollView>
    </View>
  );
};



export default Home;