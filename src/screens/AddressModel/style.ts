import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../utils/ResponsiveDimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    subContainer:{
      backgroundColor:'rgb(236, 236, 200)',
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
    },
  
    modalContent: {
      backgroundColor: '#FFF9E6', 
      borderRadius: 20,
      padding: pixelSizeHorizontal(20),
      paddingVertical: pixelSizeVertical(30),
      width: widthPixel(350),
      height:heightPixel(250), 
      alignItems: 'center',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: pixelSizeVertical(10),
      right: pixelSizeHorizontal(18),
    },
    closeButtonText: {
      color: Colors.black,
      fontSize: 24, 
    },
    welcomeText: {
      color: Colors.black,
      marginBottom: pixelSizeVertical(10),
      fontWeight:'900',
      fontSize:FontSize.font_24,
    },
    title: {
      color: Colors.black,
      textAlign: 'center',
      marginBottom: pixelSizeVertical(20),
      marginTop:10,
      height:'20%',
    },
    addButton: {
      backgroundColor: 'rgb(37, 62, 186)', 
      borderRadius: 10,
      paddingHorizontal: pixelSizeHorizontal(20),
      paddingVertical: pixelSizeVertical(9),
      width: '80%', 
      alignItems: 'center',
    },
    addButtonText: {
      color: Colors.white,
    },
    note: {
      color: Colors.black,
      textAlign: 'center',
      marginTop:8,
    },
  });
  
  export default styles