import { Button, StyleSheet } from "react-native";
import globalStyles from "../../shared/theme/globalStyles";

import { widthPixel, heightPixel, pixelSizeVertical, pixelSizeHorizontal } from "../../utils/ResponsiveDimensions";
import FontSize from "../../shared/theme/fontSize";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#DCEFFF",
    },
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: pixelSizeVertical(80),
    },
    bottomCard: {
      backgroundColor: "#fff",
      borderTopLeftRadius: widthPixel(40),
      borderTopRightRadius: widthPixel(40),
      padding: pixelSizeHorizontal(50),
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
    title: {
      fontSize: FontSize.font_24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: pixelSizeVertical(10),
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        marginTop:10,
    },
  });

  export default styles