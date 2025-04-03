import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: widthPixel(10),
      backgroundColor:'white',
    },
    contentContainer: {
      flex: 1,
      paddingTop: heightPixel(20),
    },
    header: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: heightPixel(10),
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: heightPixel(8),
    },
    totalRow: {
      borderTopWidth: 1,
      borderColor: '#ddd',
      paddingTop: heightPixel(8),
    },
    label: {
      fontSize: 14,
      color: '#333',
    },
    value: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    totalValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: heightPixel(8),
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    text: {
      flex: 1,
      marginLeft: widthPixel(10),
      fontSize: 14,
      color: '#333',
    },
    paymentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: heightPixel(16),
      paddingVertical: heightPixel(10),
    },
    paymentIcon: {
      width: widthPixel(40),
      height: heightPixel(40),
      marginRight: widthPixel(10),
    },
    paymentLabel: {
      fontSize: 12,
      color: 'gray',
    },
    paymentText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonContainer: {
      paddingVertical: heightPixel(20),
      alignItems:'center',
    },
  });
  export default styles