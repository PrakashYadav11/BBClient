import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions'
import FontSize from '../../shared/theme/fontSize'



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        gap:20
    },
    termsContainer:{
       
        width:widthPixel(358),
        height:heightPixel(1228),
        gap:30
},

policyContainer:{
    height:heightPixel(227),
    width:widthPixel(358),
    gap:10
},
policyTital:{
    fontWeight:'700',
    fontSize:FontSize.font_16,
},
policyParagraph:{
    fontWeight:'400',
    fontSize:FontSize.font_14,
},
ConditionContainer:{
   
        height:heightPixel(227),
        width:widthPixel(358),
        gap:10,
        marginTop:heightPixel(20)
}
   
})



export default styles