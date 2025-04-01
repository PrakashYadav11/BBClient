import { StyleSheet } from "react-native";
import Colors from '../../../shared/theme/colors';
import FontSize from '../../../shared/theme/fontSize';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../../utils/ResponsiveDimensions';


const styles = StyleSheet.create({
    gradientContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logo: {
      color: Colors.white,
      marginTop: pixelSizeVertical(50),
    },
    welcomeText: {
      color: Colors.white,
      marginTop: pixelSizeVertical(10),
      marginBottom: pixelSizeVertical(20),
    },
    card: {
      width: '100%', 
      borderTopLeftRadius: 25, 
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 0, 
      borderBottomRightRadius: 0,
      padding: pixelSizeHorizontal(25),
      paddingVertical: pixelSizeVertical(140), 
      alignItems: 'center',
      marginTop: pixelSizeVertical(110), 
    },
    title: {
      color: Colors.white,
      marginBottom: pixelSizeVertical(10),
      bottom:70,
      fontWeight:'800',
    },
    subtitle: {
      color: Colors.white,
      textAlign: 'center',
      marginBottom: pixelSizeVertical(20),
      bottom:60,
    },
    inputContainer: {
      backgroundColor: Colors.white,
      borderRadius: 4,
      paddingHorizontal: pixelSizeHorizontal(10),
      paddingVertical: pixelSizeVertical(6),
      width: '93%',
      bottom:30,
    },
    countryCode: {
      color: Colors.black,
      marginRight: pixelSizeHorizontal(10),
    },
    input: {
      flex: 1,
      color: Colors.black,
    },
    button: {
      backgroundColor: Colors.black, 
      width: '85%', 
      height: heightPixel(52),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5, 
    },
    buttonText: {
      color: Colors.white,
    },
    signUpText: {
      color: Colors.white,
      marginTop: pixelSizeVertical(20),
      top:80,
      fontSize:FontSize.font_18,
    },
    signUpLink: {
      color: Colors.white,
      textDecorationLine: 'underline',
      top:3,
    },
  });

  export default styles