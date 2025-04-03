import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { styles } from './style'
import CustomChatCard from '../../components/CustomChatCard/Index'
import { ChatUsers } from '../../dummyData/ChatUsers'
import { useNavigation } from '@react-navigation/native'
import { NavigationRoutes } from '../../shared/NavigationRoutes'


const Chats = () => {
 const navigation =useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader headerText='Chat' onPress={undefined}/>

      <View style={styles.cardContainer}>

        <FlatList
          data={ChatUsers}
          renderItem={({ item, index }) => <CustomChatCard item={item} index={index} onpress={()=>navigation.navigate(NavigationRoutes.ChatDetail,{data: item})} />}
        />
      </View>
    </View>
  )
}

export default Chats

