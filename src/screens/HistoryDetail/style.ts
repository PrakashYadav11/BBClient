import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({
    Container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    MainConatainer:{
        width:widthPixel(357),
        height:heightPixel(512),
        marginTop:heightPixel(20),
        gap:20
        
    },
    imgContainer:{
        width:widthPixel(220),
        height:heightPixel(60),
        gap:10  ,
        flexDirection:'row'  
    },
    img:{
        width:widthPixel(70),
        height:heightPixel(70),
        borderRadius:10
    },
    nameMainContainer:{
        width:widthPixel(150),
        height:heightPixel(52),
        gap:5
    },
    nameContainer:{
        width:widthPixel(150),
        height:heightPixel(23),
    },
    nameText:{
        fontWeight:'500',
        fontSize:FontSize.font_18,
    },
    dateContainer:{
        width:widthPixel(113),
        height:heightPixel(28),
    },
    dateText:{
        fontWeight:'300',
        fontSize:FontSize.font_12,
    },
    divider:{
        width:widthPixel(357),
        height:1,
        backgroundColor:'#D9D9D9',
        
    },
    bookingDetailsContainer:{
        width:widthPixel(356),
        height:heightPixel(199),
        gap:20
    },
    bookingDetailsTextContainer:{
        width:widthPixel(281),
        height:heightPixel(22),
    },
    bookingText:{
        fontWeight:'500',
        fontSize:FontSize.font_16,
    },
    detailsContainer:{
        width:widthPixel(302),
        height:heightPixel(157),
        gap:22
    },
    callImg:{
        width:widthPixel(24),
        height:heightPixel(24),
    },
    datailsInCon:{
        flexDirection:'row',
        gap:10
    },
    detailsText:{
        fontWeight:'400',
        fontSize:FontSize.font_12,
    },
    ratingContainer:{
        width:widthPixel(350),
        height:heightPixel(52),
        gap:8
    },
    rateText:{
        fontWeight:'400',
        fontSize:FontSize.font_12,
    },
    starContainer:{
        flexDirection:'row',
        gap:22
    },
    starImg:{
        width:widthPixel(24),
        height:heightPixel(24),
    },
    reviewInput:{
        width:widthPixel(343),
        height:heightPixel(54),
        borderWidth:1,
        borderRadius:99,
        borderColor:'#D0D5DD'
    }
    
})


export default styles;