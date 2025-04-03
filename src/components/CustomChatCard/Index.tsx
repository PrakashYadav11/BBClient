import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Images from '../../assets'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { NavigationRoutes } from '../../shared/NavigationRoutes'

export default function CustomChatCard({ item, index , onpress }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.cardbox} key={index} activeOpacity={0.8} onPress={onpress} >
            <View style={styles.infoBox}>
                {/* <View style={styles.userimg}> */}
                <Image source={item?.image} style={styles.userimg} />
                {/* </View> */}

                <Text style={styles.text}>{item?.name}</Text>
            </View>

            <Entypo name='chevron-small-right' size={30} color={'#0000FE'} />
        </TouchableOpacity>
    )
}

