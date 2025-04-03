import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface OptionsProps {
  text: string;
  url?: ImageSourcePropType; 
  onPress:any;
}

const Options: React.FC<OptionsProps> = ({ text, url,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>    
      <View style={styles.options}>
        <View style={styles.inContainer}>
          {url && <Image source={url} style={styles.image}/>}
          <Text style={styles.texts}>{text}</Text>
        </View>
        <View>
          <AntDesign name="right" size={12} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Options
