import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeHorizontal, widthPixel } from '../../utils/ResponsiveDimensions';
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
      marginTop: 10,
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
    modalView: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    iconContainer: {
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    successImage:{
      height:heightPixel(125),
      width:widthPixel(125),
    },
  });
  
  export default styles
