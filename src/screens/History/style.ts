import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../utils/ResponsiveDimensions";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: widthPixel(16),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EEEEEE',
      borderRadius: 25,
      height: heightPixel(47),
      paddingHorizontal: widthPixel(16),
      marginVertical: heightPixel(10),
    },
    searchImg: {
      height: heightPixel(20),
      width: widthPixel(20),
      marginRight: widthPixel(10),
    },
    input: {
      flex: 1,
      fontSize: widthPixel(16),
      color: '#000',
    },
    listContainer: {
      paddingBottom: heightPixel(20),
    },
  });

  export default styles