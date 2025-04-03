import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import Images from '../../assets';
import { Strings } from '../../shared/strings';
import styles from './style';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const EditProfile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CustomHeader headerText={'Edit Profile'} rightIcon={false} leftIcon={true} LeftIconImage={undefined}  />

            <View>
                <View style={styles.profileContainer}>
                    {/* Gradient Background */}
                    <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                        <Defs>
                            <LinearGradient id="gradProfile" x1="0" y1="0" x2="1" y2="1">
                                <Stop offset="0" stopColor="rgba(0, 0, 254, 1)" stopOpacity="1" />
                                <Stop offset="1" stopColor="rgba(117, 117, 255, 1)" stopOpacity="1" />
                            </LinearGradient>
                        </Defs>
                        <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradProfile)" rx="25" />
                    </Svg>

                    {/* Profile Image & Edit Button */}
                    <View style={styles.profileInContainer}>
                        <View>
                            <Image source={Images.profileImg} style={styles.profileImg} />
                            <TouchableOpacity>
                                <View style={styles.editContainer}>
                                    <Image source={Images.editprofile} style={{ height: 17, width: 17 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Name */}
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{Strings.profilename}</Text>
                    </View>
                </View>
            </View>

            {/* Editable Fields */}
            <View style={styles.editInfoContainer}>
                <CustomInput placeholder={Strings.fname} />
                <CustomInput placeholder={Strings.email} />
                <CustomInput placeholder={Strings.mobile} />
                <CustomInput placeholder={Strings.dummy} />
            </View>

            {/* Update Button */}
            <View style={styles.buttonContainer}>
                <CustomButton label={'Update'} onPress={undefined} />
            </View>
        </View>
    );
};

export default EditProfile;
