import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../utils/ResponsiveDimensions";

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      width: widthPixel(320),
      backgroundColor: "#fff",
      borderRadius: widthPixel(20),
      padding: heightPixel(20),
      alignItems: "center",
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
    },
    title: {
      fontSize: widthPixel(20),
      fontWeight: "bold",
      marginBottom: heightPixel(5),
    },
    subtitle: {
      fontSize: widthPixel(14),
      color: "gray",
      marginBottom: heightPixel(15),
    },
    otpContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: heightPixel(15),
    },
    otpInput: {
      width: widthPixel(50),
      height: widthPixel(50),
      borderWidth: 1,
      borderColor: "#3A6FF8",
      textAlign: "center",
      fontSize: widthPixel(22),
      marginHorizontal: widthPixel(5),
      borderRadius: widthPixel(10),
      backgroundColor: "#F3F4F6",
    },
    timer: {
      fontSize: widthPixel(18),
      fontWeight: "bold",
      color: "black",
      marginBottom: heightPixel(10),
    },
    resendText: {
      fontSize: widthPixel(14),
      color: "gray",
      marginBottom:20,
      marginTop:10,
    },
    resendLink: {
      color: "#3A6FF8",
      fontWeight: "bold",
    },
    buttonContainer: {
      width: "100%",
      marginTop: heightPixel(20),
    },
    button: {
      width: "100%",
      paddingVertical: heightPixel(12),
      borderRadius: widthPixel(30),
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: widthPixel(18),
      fontWeight: "bold",
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
      padding: 5,
    },
    closeText: {
      fontSize: widthPixel(18),
      fontWeight: "bold",
      color: "black",
    },
  });

  export default styles