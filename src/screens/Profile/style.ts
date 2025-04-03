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
    
    options:{
        width:widthPixel(350),
        height:heightPixel(36),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      logoutButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0000FE',
        alignItems: 'center',
        marginRight: 10,
      },
      logoutText: {
        color: '#0000FE',
        fontWeight: 'bold',
      },
      cancelButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#0000FE',
        alignItems: 'center',
      },
      cancelText: {
        color: 'white',
        fontWeight: 'bold',
      },
    optionsCon:{
       
        width:widthPixel(350),
        height:heightPixel(254),
        marginTop:heightPixel(50),
        alignItems:'center',
        justifyContent:'center',
        gap:10,
    },
    divider:{
        width:widthPixel(310),
        height:0.5,
        backgroundColor:'#D1D1D1'
    }
    
  
})

export default styles  ;
