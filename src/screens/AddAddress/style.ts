import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeHorizontal } from '../../utils/ResponsiveDimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    inputContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop:10,
    },
  
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    button: {
      width: '90%',
      backgroundColor: 'blue',
      borderRadius: 25,
      paddingVertical: heightPixel(12),
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
    },
  });

  export default styles