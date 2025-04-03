import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import CustomServiceCard from '../../components/CustomServiceCard';
import { servicesData } from '../../dummyData/servicesData'; 
import Colors from '../../shared/theme/colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import Images from '../../assets';
import { Strings } from '../../shared/strings';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const CarMechanic = () => {
  const renderServiceItem = ({ item }) => (
    <CustomServiceCard
      image={item.image}
      name={item.name}
      price={item.price}
      rating={item.rating}
    />
  );
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.bottom)}>
          <Image source={Images.backbtn} style={styles.back}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{Strings.mechanic}</Text>
        <TouchableOpacity>
          <Image source={Images.cart} style={styles.back} />
        </TouchableOpacity>
      </View>

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
        <Image source={Images.filter} style={styles.filter} />
      </View>
   
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} 
        columnWrapperStyle={styles.serviceRow}
        showsVerticalScrollIndicator={false}
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
  back:{
    height:30,
    width:30,
  },
  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(10),
    marginTop: pixelSizeVertical(10),
  },
  headerTitle: {
    fontSize: fontPixel(18),
    fontWeight: 'bold',
    color: '#333',
  },
  // Search Bar Styles
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: widthPixel(24),
    marginHorizontal: pixelSizeHorizontal(16),
    paddingHorizontal: pixelSizeHorizontal(10),
    height: heightPixel(49),
    marginBottom: pixelSizeVertical(15),
    marginTop: pixelSizeVertical(10),
  },
  searchIcon: {
    marginRight: pixelSizeHorizontal(8),
  },
  searchInput: {
    flex: 1,
    fontSize: fontPixel(16),
    color: '#333',
  },
  filter: {
    height: 20,
    width: 20,
  },
  // Services Grid Styles
  serviceRow: {
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(10),
  },
  serviceList: {
    paddingBottom: pixelSizeVertical(10),
    justifyContent:'center',
    alignItems:'center',
  },
});

export default CarMechanic;