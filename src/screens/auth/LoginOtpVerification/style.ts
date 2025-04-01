import { StyleSheet } from "react-native";
import Colors from '../../../shared/theme/colors';
import FontSize from '../../../shared/theme/fontSize';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from '../../../utils/ResponsiveDimensions';


const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      padding: pixelSizeHorizontal(25),
      paddingBottom: pixelSizeVertical(180),
      alignItems: 'center',
    },
    title: {
      color: Colors.white,
      fontSize: FontSize.font_24,
      fontWeight: 'bold',
      marginBottom: pixelSizeVertical(10),
    },
    subtitle: {
      color: Colors.white,
      textAlign: 'center',
      fontSize: FontSize.font_14,
      marginBottom: pixelSizeVertical(20),
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: pixelSizeVertical(20),
    },
    otpInput: {
      width: 42,
      height: 42,
      backgroundColor: Colors.white,
      textAlign: 'center',
      fontSize: FontSize.font_20,
      marginHorizontal: 8,
      borderRadius: 30,
      elevation: 5,
    },
    timer: {
      color: Colors.white,
      fontWeight: 'bold',
      top:49,
      fontSize:27,
    },
    resendText: {
      color: Colors.white,
      fontSize: FontSize.font_14,
      marginTop: pixelSizeVertical(10),
      top:46,
    },
    resendButton: {
      marginBottom: pixelSizeVertical(20),
    },
    resendButtonText: {
      color: Colors.white,
      fontSize: FontSize.font_16,
      textDecorationLine: 'underline',
      marginTop:pixelSizeVertical(20),
      top:40,
    },
    button: {
      backgroundColor: Colors.black,
      width: '85%',
      height: heightPixel(52),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      elevation: 8,
      top:84,
    },
    buttonText: {
      color: Colors.white,
      fontSize: FontSize.font_16,
      fontWeight: 'bold',
    },
  });

  export default styles