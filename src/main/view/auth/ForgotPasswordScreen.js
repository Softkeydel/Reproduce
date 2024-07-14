import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';
import { connect, useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavConstant from '../../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../../res';
import { showMessage, MessageType } from '../../util/AppUtil';


const ForgotPasswordScreen = (props) => {
    const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth)


    const [phoneNo, setPhoneNo] = useState('');


 



    const onClick = (ref) => {
        switch (ref) {
            case Strings.btnSubmit:
                // props.navigation.navigate(NavConstant.RESET_PASSWORD_SCREEN)
                break;
            case Strings.btnSignup:
            case Strings.btnRegister:
                // props.navigation.navigate(NavConstant.DASHBOARD_SCREEN)
                break;
            default:
                break;
        }
    }


    const validate = () => {
        if (!phoneNo) {
            showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
            return false
        } else if (!AppConstant.PHONE_REGEX.test(phoneNo)) {
            showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
            return false
        } else {
            return true;
        }

    }

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Image style={{ alignSelf: 'center', marginTop: 20, }} resizeMode={'cover'} source={Images.logo} />

                <Text style={{ alignSelf: 'center', marginTop: 50, textAlign: 'center', color: Colors.blackText, fontSize: 18, fontFamily: Fonts.extra_bold, }} >{Strings.forgotPasswordPageTitle.toUpperCase()}</Text>

                <Text style={{ alignSelf: 'center', marginTop: 20, textAlign: 'center', fontSize: 15, fontFamily: Fonts.bold, }} >{Strings.forgotPasswordIntro}</Text>
                {/* <View style={styles.lowerContainer}> */}

                <View style={{ ...Styles.textInputContainer, marginTop: 40 }}>
                    {/* <MaterialCommunityIcons name={"email"} color={Colors.theme} size={20} /> */}
                    <TextInput
                        style={Styles.textInput}
                        selectionColor={Colors.theme}
                        maxLength={10}
                        keyboardType={'numeric'}
                        placeholder={Strings.phoneNo}
                        value={phoneNo}
                        onChangeText={text => setPhoneNo(text)}
                    />
                </View>

                <TouchableOpacity style={styles.btnContainer} onPress={() => onClick(Strings.btnSubmit)}>
                    <Text style={Styles.btnText}>{Strings.btnSubmit}</Text>
                </TouchableOpacity>

                {/* </View> */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        height: Dimensions.get('window').height - 56,
        paddingHorizontal: 40,
        backgroundColor: Colors.white
    },
    btnContainer: {
        ...Styles.btnContainer,
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
    },
});

export default ForgotPasswordScreen;