import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { Strings } from '../../shared/strings'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { NavigationRoutes } from '../../shared/NavigationRoutes'

const TermsCondition = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <CustomHeader headerText={'Terms & Conditions'} rightIcon={false} leftIcon={true} LeftIconImage={undefined} />

            <ScrollView showsHorizontalScrollIndicator={false} style={styles.termsContainer}>
                <View style={styles.policyContainer}>
                    <Text style={styles.policyTital}>{Strings.policy}</Text>
                    <Text style={styles.policyParagraph}>{Strings.lorem}</Text>
                    <Text style={styles.policyParagraph}>{Strings.lorem}</Text>
                </View>

                <View style={styles.ConditionContainer}>
                <Text style={styles.policyTital}>{Strings.terms}</Text>
                <Text style={styles.policyParagraph}>{Strings.lorem}</Text>
                <Text style={styles.policyParagraph}>{Strings.lorem}{Strings.lorem}</Text>
                <Text style={styles.policyParagraph}>{Strings.lorem}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default TermsCondition
