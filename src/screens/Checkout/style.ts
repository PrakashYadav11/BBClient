import { StyleSheet } from "react-native";
import Colors from '../../shared/theme/colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    btn:{
      alignSelf:'center',
      marginTop:pixelSizeHorizontal(35),
    },
    // Service Info Section
    serviceInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: pixelSizeHorizontal(16),
      marginVertical: pixelSizeVertical(20),
    },
    serviceImage: {
      width: widthPixel(130),
      height: heightPixel(90),
      borderRadius: widthPixel(10),
    },
    serviceDetails: {
      flex: 1,
      marginLeft: pixelSizeHorizontal(10),
    },
    serviceTitle: {
      fontSize: fontPixel(18),
      fontWeight: 'bold',
      color: '#333',
    },
    servicePrice: {
      fontSize: fontPixel(16),
      fontWeight: 'bold',
      color: '#007AFF', // Changed to blue to match the image
      marginVertical: pixelSizeVertical(5),
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: fontPixel(14),
      color: '#333',
      marginLeft: pixelSizeHorizontal(5),
    },
    // Upload Sections
    sectionTitle: {
      fontSize: fontPixel(18),
      fontWeight: 'bold',
      color: '#333',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(15),
    },
    vehicleImagesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(20),
    },
    uploadPhoto: {
      width: (SCREEN_WIDTH - pixelSizeHorizontal(48)) / 2, 
      height: heightPixel(120),
      borderWidth: 1,
      borderColor: '#D3D3D3',
      borderStyle: 'dashed',
      borderRadius: widthPixel(10),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'rgba(2, 2, 254, 0.1)',
    },
    camera: {
      width: widthPixel(40),
      height: heightPixel(40),
    },
    uploadContainer: {
      alignItems: 'center',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(20),
    },
    uploadImage: {
      width: widthPixel(373),
      height: heightPixel(110),
    },
    uploadTitle: {
      fontSize: fontPixel(16),
      fontWeight: '600',
      color: '#333',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(5),
    },
    uploadSubtitle: {
      fontSize: fontPixel(12),
      color: '#999',
      marginTop: pixelSizeVertical(5),
    },
    // Continue Button
    continueButton: {
      marginHorizontal: pixelSizeHorizontal(16),
      marginVertical: pixelSizeVertical(20),
    },
  });

  export default styles