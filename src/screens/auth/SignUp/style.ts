import { StyleSheet } from 'react-native'
import { heightPixel, pixelSizeVertical, widthPixel } from '../../../utils/ResponsiveDimensions'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#DCEFFF",
    },
    btn:{
      marginTop:30,
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: heightPixel(60),
    },
    formContainer: {
      backgroundColor: "#fff",
      borderTopLeftRadius: widthPixel(40),
      borderTopRightRadius: widthPixel(40),
      padding: pixelSizeVertical(20),
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: "100%",
      height:heightPixel(570),
    },
    title: {
      fontSize: widthPixel(24),
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: pixelSizeVertical(15),
    },
    footerText: {
      marginTop: pixelSizeVertical(10),
      fontSize: widthPixel(16),
      color: "gray",
    },
    loginText: {
      fontSize: widthPixel(16),
      color: "gray",
      top:3,
    },
  });

  export default styles