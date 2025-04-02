import { StyleSheet } from "react-native";
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, SCREEN_WIDTH, widthPixel } from '../../utils/ResponsiveDimensions';
import Colors from '../../shared/theme/colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    btn:{
      alignSelf:'center',
      marginBottom:20,
    },
    sectionTitle: {
      fontSize: fontPixel(24),
      fontWeight: 'bold',
      color: '#333',
      marginHorizontal: pixelSizeHorizontal(16),
      marginVertical: pixelSizeVertical(20),
    },
    // Date Selection
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(20),
    },
    dateList: {
      paddingRight: pixelSizeHorizontal(10),
    },
    dateItem: {
      alignItems: 'center',
      padding: pixelSizeVertical(13),
      marginRight: pixelSizeHorizontal(10),
      borderRadius: widthPixel(25),
      backgroundColor: 'white',
      borderWidth: 0.3,
      width: widthPixel(50),
      height: heightPixel(74),
    },
    selectedDateItem: {
      backgroundColor: 'blue',
    },
    dayText: {
      fontSize: fontPixel(14),
      color: '#333',
    },
    dateText: {
      fontSize: fontPixel(16),
      fontWeight: 'bold',
      color: '#333',
    },
    selectedText: {
      color: Colors.white,
    },
    selectDate: {
      height: heightPixel(42),
      width: widthPixel(163),
      resizeMode: 'cover',
    },
    selectDateButton: {
      borderRadius: widthPixel(20),
      paddingVertical: pixelSizeVertical(8),
      paddingHorizontal: pixelSizeHorizontal(12),
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
    selectDateText: {
      fontSize: fontPixel(14),
      color: '#007AFF',
      fontWeight: '600',
    },
    // Time Selection
    timeRow: {
      justifyContent: 'space-between',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(15), 
    },
    timeList: {
      paddingBottom: pixelSizeVertical(20),
    },
    timeItem: {
      width: (SCREEN_WIDTH - pixelSizeHorizontal(48)) / 2, 
      paddingVertical: pixelSizeVertical(15), 
      borderRadius: widthPixel(10),
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    selectedTimeItem: {
      backgroundColor: 'blue',
    },
    timeText: {
      fontSize: fontPixel(16),
      fontWeight: '500', 
      color: '#333',
    },
    // Submit Button
    submitButton: {
      marginHorizontal: pixelSizeHorizontal(16),
      marginVertical: pixelSizeVertical(20),
    },
  });

  export default styles