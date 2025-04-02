import { StyleSheet } from "react-native";
import {
    fontPixel,
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
    widthPixel,
  } from '../../utils/ResponsiveDimensions';
  import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    amount:{
      left:30,
      color:'white',
      fontWeight:'800',
      fontSize:FontSize.font_20,
    },
    img:{
      height:heightPixel(42),
      width:widthPixel(131),
      right:17,
    },
    footer:{
      width:'100%',
      height:pixelSizeVertical(70),
      backgroundColor:'blue',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
    },
    desc: {
      width: '90%',
      alignSelf: 'center',
      color: 'rgba(61, 57, 57, 0.93)',
    },
    serviceRow: {
      justifyContent: 'space-between',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(10),
    },
    serviceList: {
      paddingBottom: pixelSizeVertical(10),
      justifyContent:'center',
      alignItems:'center',
    },
    back: {
      height: 30,
      width: 30,
    },
    sectionTitle: {
      fontSize: fontPixel(18),
      fontWeight: 'bold',
      color: '#333',
      marginHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(10),
      marginTop: pixelSizeVertical(15),
    },
    image: {
      height: heightPixel(500),
      width: '90%',
      borderRadius: 12,
      marginTop: 10,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Header Styles
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: pixelSizeHorizontal(16),
      marginBottom: pixelSizeVertical(10),
      marginTop: pixelSizeVertical(16),
    },
    headerTitle: {
      fontSize: fontPixel(18),
      fontWeight: 'bold',
      color: '#333',
    },
  });

  export default styles