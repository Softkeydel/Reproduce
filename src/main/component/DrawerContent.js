import React, { Component, useState, useEffect } from "react";
import { Alert, StyleSheet, SafeAreaView, ScrollView, View, ImageBackground, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Drawer, Avatar } from 'react-native-paper';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as RootNavigation from '../navigation/RootNavigation';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavConstant from '../navigation/NavConstant';
import AppConstant from '../util/AppConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../res';
import { showMessage, MessageType } from '../util/AppUtil';


const DrawerContent = (props) => {
    // console.warn('props ', props);

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)


    // useEffect(() => {
    //     // console.warn('@@@@@@ auth', auth);

    // }, [auth.menuDetails]);



    const onClick = (ref) => {
        switch (ref) {
            case Strings.promoCode:
                props.navigation.navigate(NavConstant.PROMOCODE_INFO_SCREEN)
                break;
            case Strings.myProfile:
                props.navigation.navigate(NavConstant.PROFILE_SCREEN)
                break;
            case Strings.addProperty:
                props.navigation.navigate(NavConstant.ADD_PROPERTY_SCREEN)
                break;
            case Strings.myProperty:
                props.navigation.navigate(NavConstant.MY_PROPERTY_SCREEN)
                break;
            case Strings.bookedProperty:
                props.navigation.navigate(NavConstant.BOOKED_PROPERTY_SCREEN)
                break;
            case Strings.myEarning:
                props.navigation.navigate(NavConstant.MY_EARNING_SCREEN)
                break;
            case Strings.blogs:
                props.navigation.navigate(NavConstant.BLOG_SCREEN)
                break;
            case Strings.termsNCondition:
                props.navigation.navigate(NavConstant.TERMS_CONDITION_SCREEN)
                break;
            case Strings.aboutUs:
                props.navigation.navigate(NavConstant.ABOUT_US_SCREEN)
                break;
            case Strings.contactUs:
                props.navigation.navigate(NavConstant.CONTACT_US_SCREEN)
                break;
            case Strings.logout:
                onClickLogout();
                break;
            default:
                break;
        }
    }


    const onClickLogout = () => {
        Alert.alert(
            Strings.logoutAlertTitle,
            Strings.logoutAlertMsg,
            [
                { text: Strings.btnCancel, onPress: () => { return null } },
                {
                    text: Strings.btnOk, onPress: () => {
                        AsyncStorage.clear().then(() => {
                            dispatch({ type: 'LOGOUT' })
                            RootNavigation.reset(NavConstant.SIGNIN_SCREEN)
                        })
                    }
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.drawerContent}>

            <View style={{ height: 84, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: Colors.primary }}>
                <Text style={{ ...styles.title, marginTop: 24 }} numberOfLines={2} ellipsizeMode='tail' >{'Hi, ' + user.userData?.name}</Text>
                {/* <Text style={styles.caption}>{'24 years'}</Text> */}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20, backgroundColor: Colors.black }}>
                <Text style={{ color: Colors.white, fontFamily: Fonts.bold, fontSize: 16, }} >{Strings.promoCode + ' : '}</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { onClick(Strings.promoCode) }}>
                    <Text style={{ marginRight: 5, color: Colors.primary, fontFamily: Fonts.bold, fontSize: 14, }}>{user.userData?.promo_code}</Text>
                    <MaterialCommunityIcons name={'information-outline'} color={Colors.primary} size={18} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.drawerItem} onPress={() => { onClick(Strings.myProfile) }}>
                <MaterialCommunityIcons name={'account-circle'} color={Colors.blackText} size={24} />
                <Text style={styles.drawerItemText}>{Strings.myProfile}</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.drawerItem} onPress={() => { onClick(Strings.logout) }}>
                <MaterialCommunityIcons name={'logout'} color={Colors.blackText} size={24} />
                <Text style={styles.drawerItemText}>{Strings.logout}</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        // backgroundColor: Color.appThemeColor,
    },
    drawerHeader: {
        // flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 40,
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: Colors.white,
    },
    drawerItem: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        // marginHorizontal: 16,
        marginVertical: 5,
        paddingHorizontal: 16,
        paddingVertical: 12,
        // borderRadius: 10,
    },
    drawerItemText: {
        marginLeft: 10,
        fontFamily: Fonts.semi_bold,
        fontSize: 15,
        color: Colors.blackText
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 16,
        color: Colors.white
    },
    caption: {
        fontFamily: Fonts.semi_bold,
        fontSize: 14,
        color: 'white'
    },
});

export default DrawerContent;