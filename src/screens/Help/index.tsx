import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style'
import CustomHeader from '../../components/CustomHeader'
import Images from '../../assets'
import { Strings } from '../../shared/strings'
import Options from '../../components/Options'
import { useNavigation } from '@react-navigation/native'
import { NavigationRoutes } from '../../shared/NavigationRoutes'



const Help = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
        <CustomHeader headerText={'Help'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}/>
        <View style={styles.MainConatainer}>
                <View style={styles.inputContainer}>
                    <Image source={Images.searchicon} style={styles.searchImg}/>
                    <TextInput placeholder="Search..." />
                </View>

                <View style={styles.touchContainer}>
                    <Text style={styles.textCon}>{Strings.gettouch}</Text>

                <View style={styles.optionsContainer}>
        
                    <Options text={'Customer Service'} url={Images.headphone} onPress={undefined}  /> 
                    <Options text={'Whatsapp'} url={Images.wp} onPress={undefined} />
                    <Options text={'Facebook'} url={Images.fb} onPress={undefined}/>
                    <Options text={'Instagram'} url={Images.insta} onPress={undefined}/> 
                </View>    
                </View>

                <View style={styles.faqContainer}>
                <Text style={styles.textCon}>{Strings.faqs}</Text>

                <View style={styles.optionsContainer}>
                <Options text={'Question Title '} onPress={()=>navigation.navigate(NavigationRoutes.faqs)}/>
                <Options text={'Question Title '} onPress={()=>navigation.navigate(NavigationRoutes.faqs)}/>
                <Options text={'Question Title '} onPress={()=>navigation.navigate(NavigationRoutes.faqs)}/>
                <Options text={'Question Title '} onPress={()=>navigation.navigate(NavigationRoutes.faqs)}/>
                
                </View>
                </View>
                
        </View>
    </View>
  )
}

export default Help
