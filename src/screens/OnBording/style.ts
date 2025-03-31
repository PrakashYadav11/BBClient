import { StyleSheet } from "react-native";
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
      padding: pixelSizeHorizontal(37),
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
    description: {
      fontSize: FontSize.font_16,
      textAlign: "center",
      color: "gray",
      marginBottom: pixelSizeVertical(20),
    },
    indicatorContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: pixelSizeVertical(20),
    },
    indicator: {
      width: widthPixel(8),
      height: heightPixel(8),
      borderRadius: widthPixel(4),
      backgroundColor: "#ccc",
      marginHorizontal: widthPixel(4),
    },
    activeIndicator: {
      backgroundColor: "#6A5AE0",
      width: widthPixel(16),
    },
   
  });

  export default styles