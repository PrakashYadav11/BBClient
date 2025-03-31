import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({
    nextButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: widthPixel(180),
        height: heightPixel(50),
        borderRadius: widthPixel(25),
      },
      nextButtonText: {
        position: "absolute",
        color: "#fff",
        fontSize: FontSize.font_16,
        fontWeight: "bold",
      },
});

export default styles