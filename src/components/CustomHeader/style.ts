import { StyleSheet } from "react-native";
import { widthPixel } from "../../utils/ResponsiveDimensions";


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centers the text
    paddingHorizontal: widthPixel(16),
    paddingVertical: widthPixel(12),
    backgroundColor: "#fff",
    position: "relative",
    marginTop:10,
  },
  backButton: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: widthPixel(20),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: widthPixel(16), // Keeps it on the left
  },
  backImage: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  textContainer: {
    flex: 1, // Takes full width, allowing centering
    alignItems: "center",
  },
  headerText: {
    fontSize: widthPixel(18),
    fontWeight: "bold",
    color: "#000",
  },
});

export default styles