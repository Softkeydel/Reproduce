import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, StatusBar, StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';
import { connect, useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavConstant from '../../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../../res';
import { showMessage, MessageType } from '../../util/AppUtil';



const SigninScreen = (props) => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth)


  // const [email, setEmail] = useState('abcd@gmail.com');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');






  const onClick = (ref) => {
    switch (ref) {
      case Strings.rememberMe:
        setRemember(!remember)
        break;
      case Strings.forgotPassword:
      case Strings.lostPassword:
        props.navigation.navigate(NavConstant.FORGOT_PASSWORD_SCREEN)
        break;
      case Strings.btnSignin:
      case Strings.btnLogin:
        // props.navigation.navigate(NavConstant.DASHBOARD_SCREEN)
        break;
      case Strings.btnSignup:
      case Strings.btnRegister:
        props.navigation.navigate(NavConstant.SIGNUP_SCREEN)
        break;
      default:
        break;
    }
  }


  const validate = () => {
    // return true;
    if (!phoneNo) {
      showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
      return false
    } else if (!AppConstant.PHONE_REGEX.test(phoneNo)) {
      showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
      return false
    } else if (!password) {
      showMessage(Strings.passwordEmptyMsg, MessageType.ERROR);
      return false
    } else {
      return true;
    }
  }



  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      
      <View style={styles.container}>

        <Image style={{ alignSelf: 'center', marginTop: 100 }} resizeMode={'cover'} source={Images.logo} />

        <Text style={{ alignSelf: 'center', marginTop: 10, textAlign: 'center', fontFamily: Fonts.extra_bold, }} >{Strings.signinToContinue}</Text>

        {/* <View style={styles.lowerContainer}> */}

        <View style={{ ...Styles.textInputContainer, marginTop: 40 }}>
          {/* <MaterialCommunityIcons name={"email"} color={Colors.theme} size={20} /> */}
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            maxLength={10}
            keyboardType={'numeric'}
            placeholder={Strings.phoneNo}
            placeholderTextColor='gray'
            value={phoneNo}
            onChangeText={text => setPhoneNo(text)}
          />
        </View>

        <View style={{ ...Styles.textInputContainer, marginTop: 16 }}>
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            secureTextEntry={!showPassword}
            maxLength={40}
            placeholder={Strings.password}
            placeholderTextColor='gray'
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}>
            <MaterialCommunityIcons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnContainer} onPress={() => onClick(Strings.btnLogin)}>
          <Text style={Styles.btnText}>{Strings.btnLogin}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ paddingVertical: 5 }} onPress={() => { onClick(Strings.lostPassword) }}>
          <Text style={{ alignSelf: 'center', color: Colors.blackText, fontFamily: Fonts.bold, fontSize: 16 }}>{Strings.lostPassword}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute', bottom: 10, paddingVertical: 5, }} onPress={() => { onClick(Strings.btnRegister) }}>
          <Text style={{ color: Colors.blackText, fontFamily: Fonts.semi_bold, fontSize: 16 }}>{Strings.dontHaveAccount}</Text>
          <Text style={{ color: Colors.blackText, fontFamily: Fonts.bold, fontSize: 16 }}>{Strings.btnRegister}</Text>
        </TouchableOpacity>

        {/* </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // backgroundColor: Colors.white
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height - 56,
    // height: Dimensions.get('window').height,
    paddingHorizontal: 30,
    backgroundColor: Colors.white
  },
  btnContainer: {
    ...Styles.btnContainer,
    width: '60%',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SigninScreen;