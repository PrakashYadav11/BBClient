import { StyleSheet } from "react-native";
import { widthPixel } from "../../utils/ResponsiveDimensions";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Keeps text centered
    paddingHorizontal: widthPixel(16),
    paddingVertical: widthPixel(12),
    backgroundColor: "#fff",
    position: "relative",
    marginTop: 10,
  },
  backButton: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: widthPixel(20),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: widthPixel(16), // Ensures it stays on the left
  },
  rightButton: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: widthPixel(20),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: widthPixel(16), // Ensures it stays on the right
  },
  backImage: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  textContainer: {
    flex: 1, // Ensures text remains centered
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: widthPixel(18),
    fontWeight: "bold",
    color: "#000",
  },
});

export default styles;
