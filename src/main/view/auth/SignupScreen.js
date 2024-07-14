import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { TextInput as TextIn } from 'react-native-paper';
import { connect, useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import Dropdown from '../../component/Dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavConstant from '../../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../../res';
import { showMessage, MessageType } from '../../util/AppUtil';


const SignupScreen = (props) => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth)


  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [chkAgreement, setChkAgreement] = React.useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const userTypes = [
    {
      label: "Broker",
      value: 1,
    },
    {
      label: "Owner",
      value: 2,
    },
    {
      label: "User",
      value: 3,
    },
  ];





  const onClick = (ref) => {
    switch (ref) {
      case Strings.agreement:
        setChkAgreement(!chkAgreement)
        break;
      case Strings.forgotPassword:
      case Strings.lostPassword:
        props.navigation.navigate(NavConstant.FORGOT_PASSWORD_SCREEN)
        break;
      case Strings.btnSignin:
      case Strings.btnLogin:
        props.navigation.goBack();
        break;
      case Strings.btnSignup:
      case Strings.btnRegister:
        // props.navigation.navigate(NavConstant.VERIFY_OTP_SCREEN)
        // if (validate()) {

        // }
        break;
      default:
        break;
    }
  }


  const validate = () => {
    // return true;
    if (!userType) {
      showMessage(Strings.userTypeEmptyMsg, MessageType.ERROR);
      return false
    } else if (!name) {
      showMessage(Strings.nameEmptyMsg, MessageType.ERROR);
      return false
    } else if (!phoneNo) {
      showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
      return false
    } else if (!AppConstant.PHONE_REGEX.test(phoneNo)) {
      showMessage(Strings.validPhoneNoMsg, MessageType.ERROR);
      return false
    } else if (!email) {
      showMessage(Strings.validEmailMsg, MessageType.ERROR);
      return false
    } else if (!AppConstant.EMAIL_REGEX.test(email)) {
      showMessage(Strings.validEmailMsg, MessageType.ERROR);
      return false
    } else if (!password) {
      showMessage(Strings.passwordEmptyMsg, MessageType.ERROR);
      return false
    } else if (!confPassword) {
      showMessage(Strings.confPasswordEmptyMsg, MessageType.ERROR);
    } else if (password !== confPassword) {
      showMessage(Strings.passwordNotMatchingMsg, MessageType.ERROR);
    } else {
      return true;
    }
  }

  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>


        <Image style={{ alignSelf: 'center', marginTop: 0 }} resizeMode={'cover'} source={Images.logo} />

        <Text style={{ alignSelf: 'center', marginTop: 10, marginBottom: 20, textAlign: 'center', fontFamily: Fonts.extra_bold, }} >{Strings.createYourAccount.toUpperCase()}</Text>

        {/* <View style={styles.lowerContainer}> */}

        <Dropdown
          // style={{ flex: 1,  color: '#002259' }}
          inputProps={{
            backgroundColor: Colors.textInputBg
          }}
          mode={'outlined'}
          placeholder={Strings.dropdownHint}
          data={userTypes}
          value={userType}
          setValue={(v) => {
            setUserType(v);
          }}
        />

        <View style={{ ...Styles.textInputContainer, marginTop: 16 }}>
          {/* <MaterialCommunityIcons name={"email"} color={Colors.theme} size={20} /> */}
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            maxLength={40}
            // keyboardType={'visible-password'}
            autoCapitalize='words'
            placeholder={Strings.name}
            placeholderTextColor='gray'
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={{ ...Styles.textInputContainer, marginTop: 16 }}>
          {/* <MaterialCommunityIcons name={"email"} color={Colors.theme} size={20} /> */}
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            maxLength={10}
            keyboardType={'decimal-pad'}
            placeholder={Strings.phoneNo}
            placeholderTextColor='gray'
            value={phoneNo}
            onChangeText={text => setPhoneNo(text)}
          />
        </View>

        <View style={{ ...Styles.textInputContainer, marginTop: 16 }}>
          {/* <MaterialCommunityIcons name={"email"} color={Colors.theme} size={20} /> */}
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            maxLength={40}
            // keyboardType={'default'}
            autoCapitalize='none'
            placeholder={Strings.email}
            placeholderTextColor='gray'
            value={email}
            onChangeText={text => setEmail(text)}
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

        <View style={{ ...Styles.textInputContainer, marginTop: 16 }}>
          <TextInput
            style={Styles.textInput}
            selectionColor={Colors.theme}
            secureTextEntry={!showConfPassword}
            maxLength={40}
            placeholder={Strings.confPassword}
            placeholderTextColor='gray'
            value={confPassword}
            onChangeText={text => setConfPassword(text)}
          />
          <TouchableOpacity onPress={() => { setShowConfPassword(!showConfPassword) }}>
            <MaterialCommunityIcons name={showConfPassword ? "eye-outline" : "eye-off-outline"} size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnContainer} onPress={() => onClick(Strings.btnRegister)}>
          <Text style={Styles.btnText}>{Strings.btnRegister}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute', bottom: 10, paddingVertical: 5, }} onPress={() => { onClick(Strings.btnLogin) }}>
          <Text style={{ color: Colors.blackText, fontFamily: Fonts.semi_bold, fontSize: 16 }}>{Strings.alreadyHaveAccount}</Text>
          <Text style={{ color: Colors.blackText, fontFamily: Fonts.bold, fontSize: 16 }}>{Strings.btnLogin}</Text>
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
    paddingHorizontal: 30,
    backgroundColor: Colors.white
  },
  btnContainer: {
    ...Styles.btnContainer,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignupScreen;