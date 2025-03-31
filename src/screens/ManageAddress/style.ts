import { StyleSheet } from "react-native";
import Colors from '../../shared/theme/colors';
import { heightPixel, pixelSizeHorizontal } from '../../utils/ResponsiveDimensions';

const styles = StyleSheet.create({
    addAddressButton: {
      padding: pixelSizeHorizontal(10),
      marginHorizontal: pixelSizeHorizontal(20),
    },
    addAddressText: {
      color: Colors.primary_color,
      fontSize: 16,
    },
    listContainer: {
      paddingHorizontal: pixelSizeHorizontal(20),
    },
    addressCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      padding: pixelSizeHorizontal(10),
      marginVertical: heightPixel(5),
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    icon: {
      width: 30,
      height: 30,
      marginRight: pixelSizeHorizontal(10),
    },
    textContainer: {
      flex: 1,
    },
    addressType: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.black,
    },
    addressText: {
      fontSize: 14,
      color: 'grey',
    },
    moreIcon: {
      width:20,
      height: 20,
      tintColor: 'grey',
    },
    continueButton: {
      backgroundColor: Colors.primary_color,
      padding: heightPixel(12),
      margin: pixelSizeHorizontal(20),
      borderRadius: 25,
      alignItems: 'center',
    },
    continueText: {
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  export default styles