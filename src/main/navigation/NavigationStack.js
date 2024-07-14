import * as React from 'react';
import { StatusBar, View, ImageBackground, Image, Text, TouchableOpacity, } from 'react-native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerContent from '../component/DrawerContent';


import SplashScreen from '../view/splash/SplashScreen';
import IntroScreen from '../view/intro/IntroScreen';
import SigninScreen from '../view/auth/SigninScreen';
import SignupScreen from '../view/auth/SignupScreen';
import ForgotPasswordScreen from '../view/auth/ForgotPasswordScreen';
import NavConstant from '../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../res';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={({ route, navigation }) => {
      // console.log('@@@@@@@@@@@@@@@@@@@screenOptions', route, '\n', navigation);
      return ({
        headerShown: true,
        // headerTitleAlign: 'center',
        headerTitleStyle: { color: Colors.white, fontFamily: Fonts.bold },
        // headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: Colors.white,
        headerStyle: { backgroundColor: Colors.primary },
        drawerType: 'slide',
        headerTitle: (props) => <Image style={{ width: 40, height: 40, borderRadius: 5 }} source={Images.logo} />,
        headerRight: () => {
          // console.log('@@@@@@@@@@@@@@@@@@', route);
          return (
            // <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity style={{ marginRight: 16, padding: 0 }} disabled={true} onPress={() => { navigation.navigate(NavConstant.CART_SCREEN) }}>
              {/* <MaterialCommunityIcons name='bell-outline' size={24} color={Colors.white} /> */}
            </TouchableOpacity>

            // </View>
          );
        }
      })
    }}>



  </Drawer.Navigator>
);


const AppStackNavigation = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => {
      // console.log('@@@@@@@@@@@@@@@@@@@screenOptions', route, '\n', navigation);

      return ({
        headerShown: true,
        // headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: Fonts.semi_bold, },
        // headerTransparent: true,
        headerShadowVisible: false,
        // headerStyle: { backgroundColor: Colors.primary },
        // headerStyle: { backgroundColor: 'transparent' },
        // headerTintColor: Colors.white,
      })
    }}>

    <Stack.Screen name={NavConstant.SPLASH_SCREEN} component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name={NavConstant.INTRO_SCREEN} component={IntroScreen} options={{ headerShown: true, title: '' }} />
    <Stack.Screen name={NavConstant.SIGNIN_SCREEN} component={SigninScreen} options={{ headerShown: true, title: '',  }} />
    <Stack.Screen name={NavConstant.SIGNUP_SCREEN} component={SignupScreen} options={{ headerShown: true, title: '' }} />
    <Stack.Screen name={NavConstant.FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen} options={{ headerShown: true, title: '' }} />
    {/* <Stack.Screen name={NavConstant.DASHBOARD_SCREEN} component={DrawerNavigation} options={{ headerShown: false, title: Strings.tabHome }} /> */}
    

  </Stack.Navigator>
);

export default AppStackNavigation;