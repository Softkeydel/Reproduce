import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, View, Image, Text } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavConstant from '../../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../../res';


const SplashScreen = (props) => {
  const dispatch = useDispatch();


  useEffect(() => {
    let timeout = setTimeout(() => {
      AsyncStorage.multiGet(['accessToken', 'userData']).then(data => {
        return ({ accessToken: data[0][1], userData: JSON.parse(data[1][1]) })
      }).then(data => {
        console.log('@@@@@@@ SplashScreen', data);
        // props.navigation.replace(NavConstant.SIGNIN_SCREEN)
        if (data.accessToken && data.userData) {
          props.navigation.replace(NavConstant.DASHBOARD_SCREEN, data.userData)
        } else {
          // props.navigation.replace(NavConstant.SIGNIN_SCREEN)
          props.navigation.replace(NavConstant.INTRO_SCREEN)
        }
      })

    }, 1000)

    return () => clearTimeout(timeout);
  }, []);


  return (
    <View style={styles.container}>

      {/* <View style={styles.logoTextContainer}> */}
      <Image style={{}} resizeMode={'cover'} source={Images.logo} />
      {/* </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  logoTextContainer: {
    width: 190,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 95,
    backgroundColor: Colors.logoBg,
  },
  logoText: {
    fontSize: 45,
    color: Colors.theme,
    fontFamily: Fonts.bold,
  },
});

export default SplashScreen;