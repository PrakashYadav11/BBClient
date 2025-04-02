import { StyleSheet } from "react-native";
import Colors from '../../shared/theme/colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';

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
      color: 'black',
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

  export default styles