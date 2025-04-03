import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions'
import FontSize from '../../shared/theme/fontSize'



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    faqContainer:{
        width:widthPixel(356),
        height:heightPixel(228),
        backgroundColor:'#fff',
        gap:10,
        marginTop:heightPixel(40)
    },
    faqText:{
        fontWeight:'700',
        fontSize:FontSize.font_24,
    },
    farparagraph:{
        fontWeight:'400',
        fontSize:FontSize.font_16,
    }
    
})



export default styles