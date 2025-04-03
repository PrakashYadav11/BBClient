import { StyleSheet } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/ResponsiveDimensions';
import Colors from '../../shared/theme/colors';
import FontSize from '../../shared/theme/fontSize';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    profileContainer:{
        width:widthPixel(350),
        height:heightPixel(156),
        top:heightPixel(20),
        backgroundColor:Colors.primary_color,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        
    },
    profileInContainer:{
        width:widthPixel(174),
        height:heightPixel(126),
        gap:10,
        alignItems:'center',
        justifyContent:'center',
        
        
       
    },
    profileImg:{
        height:heightPixel(89),
        width:widthPixel(89),
        borderRadius:99,
        
    },
    editContainer:{
        zIndex:1,
        position:'absolute',
        bottom:5,
        left:60
    },
    nameContainer:{
        width:widthPixel(174),
        height:heightPixel(27),
        alignItems:'center',
        justifyContent:'center'        
    },
    nameText:{
        color:Colors.white,
        fontWeight:'500',
        fontSize:FontSize.font_20,  
        bottom:10,
    },
    editInfoContainer:{
        width:widthPixel(360),
        height:heightPixel(366),
        marginTop:heightPixel(40),
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer: {
        marginTop:heightPixel(90),
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
        fontSize: FontSize.font_16, // Use FontSize for consistency
        fontWeight: "bold",
    },
    
    
    
  
})

export default styles  ;