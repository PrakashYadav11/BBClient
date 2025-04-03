import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import FontSize from '../../shared/theme/fontSize';

const styles = StyleSheet.create({

    options:{
        width:widthPixel(370),
        height:heightPixel(36),
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:heightPixel(20),
        paddingHorizontal:20,
        alignItems:'center',
        gap:20
    },
    inContainer:{
        flexDirection:'row'
        ,gap:10,
        alignItems:'center'
    },
    texts:{
        fontWeight:600,
        fontSize:FontSize.font_16,
    },
    image:{
        width:widthPixel(26),
        height:widthPixel(26),
       
    }
    
  
})

export default styles;