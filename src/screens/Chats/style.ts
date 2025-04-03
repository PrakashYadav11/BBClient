import { StyleSheet } from "react-native";
import Colors from "../../shared/theme/colors";
import { pixelSizeHorizontal, pixelSizeVertical } from "../../utils/ResponsiveDimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: pixelSizeVertical(10),
    },
    cardContainer: {
        marginBottom: pixelSizeVertical(50)
    },
    card: {

    }
})