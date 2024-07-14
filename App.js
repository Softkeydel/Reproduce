/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { LogBox, StyleSheet, SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { configureFonts, MD2LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/main/navigation/RootNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStore from "./src/main/store/AppStore";
import NavigationStack from './src/main/navigation/NavigationStack'
import NavConstant from './src/main/navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from './src/res';


const App = () => {
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');
  const [statusBarColor, setStatusBarColor] = useState('transparent');
  const ignoreLogs = [
    'VirtualizedLists should never be nested',
    'Require cycle',
    'EventEmitter.removeListener',
    'ViewPropTypes will be removed from React Native',
    'Warning'
  ]

  const fontConfig = {
    ios: {
      regular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal'
      },
      medium: {
        fontFamily: Fonts.medium,
        fontWeight: 'normal'
      },
      light: {
        fontFamily: Fonts.thin,
        fontWeight: 'normal'
      },
    },
    android: {
      regular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal'
      },
      medium: {
        fontFamily: Fonts.medium,
        fontWeight: 'normal'
      },
      light: {
        fontFamily: Fonts.thin,
        fontWeight: 'normal'
      },
    }
  };
  const theme = {
    ...DefaultTheme,
    version: 2,
    colors: {
      ...DefaultTheme.colors,
      // primary: Colors.primary,
      // placeholder: Colors.primary,
      // background: Colors.primary,

    },
    fonts: {
      regular: {
        fontFamily: Fonts.regular,
        fontWeight: 'normal'
      },
      medium: {
        fontFamily: Fonts.medium,
        fontWeight: 'normal'
      },
      light: {
        fontFamily: Fonts.thin,
        fontWeight: 'normal'
      },
      thin: {
        fontFamily: Fonts.thin,
        fontWeight: 'normal'
      }
    },
    // fonts: configureFonts(fontConfig)
  }


  useEffect(() => {
    // LogBox.ignoreAllLogs();
    LogBox.ignoreLogs(ignoreLogs)
    // console.warn = (error) => { error.includes([ignoreLogs]) ? error.apply : error };
    // console.error = (error) => { error.includes([ignoreLogs]) ? error.apply : error };
  }, [])

  // settings={{icon: (props) => <MaterialCommunityIcons {...props} />}}
  return (
    <StoreProvider store={AppStore}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>

          <StatusBar
            barStyle={statusBarStyle}
            backgroundColor={statusBarColor}
            translucent={true}
            showHideTransition={'slide'}
          // hidden={true}
          />

          <NavigationContainer
            ref={navigationRef}
            onStateChange={(state) => {
              // console.log('@@@@@@@@@@@@@@@@@@@onStateChange', state);
              switch (state.routes[state.index].name) {
                case NavConstant.SPLASH_SCREEN:
                case NavConstant.INTRO_SCREEN:
                case NavConstant.SIGNIN_SCREEN:
                case NavConstant.SIGNUP_SCREEN:
                default:
                  setStatusBarStyle('dark-content')
                  // setStatusBarColor('transparent')
                  break;
              }
            }}>

            <NavigationStack />
          </NavigationContainer>

        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
});

export default gestureHandlerRootHOC(App);
