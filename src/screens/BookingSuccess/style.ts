import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import FontSize from '../../shared/theme/fontSize';


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#fff'
    },

    Container: {
        width: widthPixel(350),
        height: heightPixel(415),
        top: heightPixel(30),
        gap:30,

    },

    imgOuterContainer: {
        width: widthPixel(230),
        height: heightPixel(226),
        gap: heightPixel(22),

    },
    imgContainer: {
        width: widthPixel(144),
        height: heightPixel(156),
        paddingHorizontal:heightPixel(70)
    },
    textContainer: {
        height: heightPixel(48),
        width: widthPixel(230),
        alignItems: 'center'
    },
    text: {
        fontWeight: '500',
        fontSize: FontSize.font_20,
    },
    ratingContainer:{
        width:widthPixel(350),
        height:heightPixel(51),
        gap:8
    },
    ratingText:{
        fontWeight:400,
        fontSize:FontSize.font_16,
    },
    input:{
        alignItems:'center',
        width:widthPixel(360),
    },
    startImg:{
        height:heightPixel(30),
        width:widthPixel(30),
    },
    starImgContainer:{
        flexDirection:'row',
        gap:20
    },
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
      buttonContainer: {
        top: heightPixel(250), // Responsive top margin
    }
})

export default styles;