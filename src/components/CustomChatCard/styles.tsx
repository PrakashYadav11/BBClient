import { StyleSheet } from "react-native";
import { pixelSizeHorizontal, pixelSizeVertical } from "../../utils/ResponsiveDimensions";
import Colors from "../../shared/theme/colors";
import { Fontfamily } from "../../shared/theme/Fontfamily";


export const styles = StyleSheet.create({
    cardbox:{
        width:pixelSizeVertical('100%'),
        marginBottom:10,
        paddingHorizontal: pixelSizeHorizontal(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    infoBox:{
        flexDirection:'row',
        width:'auto',
        alignItems:'center',
        gap: pixelSizeHorizontal(20)
    },
    userimg:{
        width: pixelSizeHorizontal(60),
        height: pixelSizeVertical(60),
        backgroundColor: Colors.black,
        borderRadius:10
    },
    text:{
        fontFamily:Fontfamily.nunito700
    }
})