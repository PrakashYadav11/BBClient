import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({
    Container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    },
    MainConatainer:{
        width:widthPixel(357),
        height:heightPixel(700),
        marginTop:heightPixel(20),
        alignItems:'center',
        gap:20
        
    },
    inputContainer:{
        width:widthPixel(358),
        height:heightPixel(47),
        borderRadius:40,
        backgroundColor:'#EEEEEE',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    searchImg:{
        height:heightPixel(22),
        width:widthPixel(22),
        marginLeft:10
    },
    touchContainer:{
        width:widthPixel(358),
        height:heightPixel(267),
        alignItems:'center',
        
    },
    textCon:{
        fontWeight:'700',
        fontSize:FontSize.font_20,
    },
    optionsContainer:{
        width:widthPixel(367),
        height:heightPixel(230),

    },
    faqContainer:{
        width:widthPixel(358),
        height:heightPixel(230),
        marginTop:10,
        alignItems:'center'
    }

})


export default styles;
