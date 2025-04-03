import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import styles from './style'
import CustomHeader from '../../components/CustomHeader'
import Images from '../../assets'
import { Strings } from '../../shared/strings'
import { useRoute } from '@react-navigation/native'




const HistoryDetails = () => {
    const route = useRoute();
    let data = route?.params?.data
    console.log(data);
    
    return (
        <View style={styles.Container}>
            <CustomHeader headerText={'History'} rightIcon={true} leftIcon={true} LeftIconImage={undefined}  />


            <View style={styles.MainConatainer}>

                <View style={styles.imgContainer}>
                    <Image source={data.image} style={styles.img} />
                    <View style={styles.nameMainContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{data.name}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>{Strings.dateInfo}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.divider}></View>


                <View style={styles.bookingDetailsContainer}>
                    <View style={styles.bookingDetailsTextContainer}>
                        <Text style={styles.bookingText}>Booking details</Text>
                    </View>

                    <View style={styles.detailsContainer}>
                        <View style={styles.datailsInCon}>
                            <Image source={Images.call} style={styles.callImg} />
                            <Text style={styles.detailsText}>{Strings.profilename}, +91 65447367</Text>
                        </View>

                        <View style={styles.datailsInCon}>
                            <Image source={Images.paid} style={styles.callImg} />
                            <Text style={styles.detailsText}>{Strings.amountpaid}</Text>
                        </View>

                        <View style={styles.datailsInCon}>
                            <Image source={Images.homei} style={styles.callImg} />
                            <Text style={styles.detailsText}>{Strings.homeaddress}</Text>
                        </View>

                        <View style={styles.datailsInCon}>
                            <Image source={Images.clock} style={styles.callImg} />
                            <Text style={styles.detailsText}>{Strings.time}</Text>
                        </View>

                        <View style={styles.divider}></View>

                        <View style={styles.ratingContainer}>
                            <View>
                                <Text style={styles.rateText}>{Strings.rate}</Text>
                            </View>
                            <View style={styles.starContainer}>
                                
                                <Image source={Images.star} style={styles.starImg} />
                                <Image source={Images.star} style={styles.starImg} />
                                <Image source={Images.star} style={styles.starImg} />
                                <Image source={Images.blanckstar} style={styles.starImg} />
                                <Image source={Images.blanckstar} style={styles.starImg} />
                            </View>
                        </View>

                        <View style={styles.divider}></View>

                        <TextInput placeholder='Review' style={styles.reviewInput} />
                    </View>

                </View>


            </View>

        </View>
    )
}

export default HistoryDetails
