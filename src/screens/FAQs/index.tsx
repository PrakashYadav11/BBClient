import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import CustomHeader from '../../components/CustomHeader'
import { Strings } from '../../shared/strings'
import { NavigationRoutes } from '../../shared/NavigationRoutes'
import { useNavigation } from '@react-navigation/native'

const FAQs = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}> 
      <CustomHeader headerText={'FAQ'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}  />

      <View style={styles.faqContainer}>
          <Text style={styles.faqText}>Question</Text>

          <View>
            <Text style={styles.farparagraph}>{Strings.lorem}</Text>
          </View>

          <View>
            <Text style={styles.farparagraph}>{Strings.lorem}</Text>
          </View>

      </View>
    </View>
  )
}

export default FAQs
