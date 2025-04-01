import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons
import AddressModel from '../AddressModel';
import CustomServiceCard from '../../components/CustomServiceCard';
import { servicesData } from '../../dummyData/servicesData';
import Colors from '../../shared/theme/colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import Images from '../../assets';


const categories = [
  { id: '1', image: Images.carpenter },
  { id: '2', image: Images.carwash},
  { id: '3', image: Images.pestcontroal },
  { id: '4', image: Images.plumber },
  { id: '5', image: Images.electrician },
  { id: '6', image: Images.mechanic},
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Render category item
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
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
          <Text style={styles.locationText}>New Delhi, INDIA</Text>
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

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // 3 items per row
        columnWrapperStyle={styles.categoryRow}
        scrollEnabled={false}
      />

      {/* Recommended Services Section (Horizontal FlatList) */}
      <Text style={styles.sectionTitle}>Recommended Services</Text>
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal // Horizontal scrolling
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.serviceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: pixelSizeVertical(10),
  },
  filter:{
    height:20,
    width:20,
  },
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(10),
    marginTop:pixelSizeVertical(8),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: fontPixel(16),
    color: '#007AFF',
    marginLeft: pixelSizeHorizontal(7),
    marginRight: pixelSizeHorizontal(2),
  },
  // Search Bar Styles
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: widthPixel(24),
    marginHorizontal: pixelSizeHorizontal(16),
    paddingHorizontal: pixelSizeHorizontal(10),
    marginTop:pixelSizeVertical(10),
    height: heightPixel(49),
    marginBottom: pixelSizeVertical(20),
  },
  searchIcon: {
    marginRight: pixelSizeHorizontal(8),
  },
  searchInput: {
    flex: 1,
    fontSize: fontPixel(16),
    color: '#333',
  },
  sectionTitle: {
    fontSize: fontPixel(18),
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(10),
  },
  categoryRow: {
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(2),
    marginBottom: pixelSizeVertical(10),
  },
  categoryItem: {
    alignItems: 'center',
    width: SCREEN_WIDTH / 3 - pixelSizeHorizontal(20), 
  },
  categoryIconContainer: {
    width: widthPixel(100),
    height: heightPixel(90),
    borderRadius: widthPixel(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(5),
  },
  categoryIcon: {
    width: widthPixel(80),
    height: heightPixel(90),
  },
  serviceList: {
    paddingHorizontal: pixelSizeHorizontal(16),
  },
});

export default Home;