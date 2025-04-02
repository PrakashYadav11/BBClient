import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_HEIGHT, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';


const CustomServiceCard = ({ image, name, price, rating }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      {/* Card Content */}
      <View style={styles.content}>
        {/* Name and Rating */}
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={fontPixel(14)} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        </View>

        {/* Price */}
        <Text style={styles.price}>{price}</Text>

        {/* Arrow Button */}
        <TouchableOpacity style={styles.arrowButton} onPress={()=>navigation.navigate(NavigationRoutes.detail)}>
          <Icon name="arrow-forward" size={fontPixel(20)} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: widthPixel(12),
    margin: pixelSizeHorizontal(8),
    width: SCREEN_WIDTH * 0.45,
    height:SCREEN_HEIGHT * 0.20, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: heightPixel(2) },
    shadowOpacity: 0.15,
    shadowRadius: widthPixel(4),
    overflow: 'hidden',
  },
  image: {
    width: widthPixel(186), 
    height: heightPixel(110), 
    borderTopLeftRadius: widthPixel(12),
    borderBottomLeftRadius: widthPixel(12),
  },
  content: {
    flex: 1, 
    padding: pixelSizeHorizontal(8),
    justifyContent: 'space-between',
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: fontPixel(14), 
    fontWeight: '600',
    color: 'black',
    flexShrink: 1, 
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pixelSizeHorizontal(4),
  },
  rating: {
    fontSize: fontPixel(14),
    marginLeft: pixelSizeHorizontal(4),
    color: '#666',
  },
  price: {
    fontSize: fontPixel(19),
    fontWeight: 'bold',
    color: 'black',
    marginTop: pixelSizeVertical(4),
  },
  arrowButton: {
    position: 'absolute',
    bottom: pixelSizeVertical(8),
    right: pixelSizeHorizontal(8),
    backgroundColor: '#007AFF',
    borderRadius: widthPixel(16),
    width: widthPixel(32),
    height: heightPixel(32),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default CustomServiceCard;