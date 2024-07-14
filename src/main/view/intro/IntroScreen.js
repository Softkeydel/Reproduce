import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, Animated, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import NavConstant from '../../navigation/NavConstant';
import { Styles, Colors, Strings, Fonts, Images, Icons } from '../../../res';





const IntroScreen = (props) => {
  const dispatch = useDispatch();

  const flatListRef = React.useRef();
  // const [index, setIndex] = useState(0);
  let currentIndex = 0;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');
  // const imageW = width * 0.7;
  // const imageH = imageW * 1.4;
  const SLIDER_DATA = [
    {
      key: '1',
      title: 'Share your vision',
      description: "Let's connect to discuss your business requirement and your vision.",
      // description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      key: '2',
      title: 'Setup and customization',
      description: "Let's connect to discuss your business requirement and your vision.",
    },
    {
      key: '3',
      title: 'Lorem Ipsum is simply dummy text',
      description: "Let's connect to discuss your business requirement and your vision.",
    },
  ];


  const onClick = (ref) => {
    console.log('@@@@@@@@@@@@@@@@@@onClick', ref);
    switch (ref) {
      case Strings.btnSkip:
        props.navigation.replace(NavConstant.SIGNIN_SCREEN)
        break;
      case Strings.btnNext:
        if(currentIndex < SLIDER_DATA.length - 1) {
          flatListRef.current.scrollToIndex({
            index: (currentIndex == SLIDER_DATA.length - 1) ? currentIndex : ++currentIndex,
            animated: true,
          })
        } else {
          props.navigation.replace(NavConstant.SIGNIN_SCREEN)
        }
        break;
      default:
        break;
    }
  }



  const renderItem = React.useCallback(({ item, index }) => {
    console.log('@@@@@@@renderItem', index);
    return (
      <View style={[styles.itemContainer]}>

        <View style={styles.upperContainer}>
          <Animated.Image
            style={{
              // flex: 1,
              // width: Dimensions.get('window').width,
              // height: Dimensions.get('screen').height,
              // borderRadius: 1,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
            source={Images.logo}
          />
          <Text style={{ alignSelf: 'center', marginTop: 10, textAlign: 'center', fontFamily: Fonts.extra_bold,  }} >{Strings.appName}</Text>
        </View>

        <View style={styles.lowerContainer}>
          <Text style={styles.introShort}>{item.title}</Text>
          <Text style={styles.introLong}>{item.description}</Text>
          {/* <TouchableOpacity style={styles.btnContainer} onPress={() => { onClick(Strings.btnGetStarted) }}>
            <Text style={Styles.btnText}>{Strings.btnGetStarted}</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>

      <FlatList
        ref={flatListRef}
        data={SLIDER_DATA}
        // keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onMomentumScrollEnd={(event) => {
          console.log('@@@@@@@@@@@@@@@onMomentumScrollEnd');
          currentIndex = Math.floor(
            event.nativeEvent.contentOffset.x /
            event.nativeEvent.layoutMeasurement.width
          );
        }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, paddingHorizontal: 30, backgroundColor: 'white' }}>
        <TouchableOpacity style={{}} onPress={() => { onClick(Strings.btnSkip) }}>
          <Text style={{ color: Colors.blackText, fontSize: 16, fontFamily: Fonts.bold }} >{Strings.btnSkip}</Text>
        </TouchableOpacity>

        <View style={{}}>
          <ExpandingDot
            containerStyle={{
              bottom: 0,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              // backgroundColor: Colors.white
            }}
            inActiveDotOpacity={1}
            activeDotColor={Colors.primary}
            inActiveDotColor={Colors.greyBg}
            expandingDotWidth={30}
            data={SLIDER_DATA}
            scrollX={scrollX}
          />
        </View>

        <TouchableOpacity onPress={() => { onClick(Strings.btnNext) }}>
          <Text style={{ color: Colors.theme, fontSize: 16, fontFamily: Fonts.bold }}>{Strings.btnNext}</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.white
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    // backgroundColor: Colors.white
  },
  upperContainer: {
    flex: 1,
    // flexDirection: 'column',
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    paddingVertical: 20,
    // backgroundColor: Colors.gray
  },
  linearGradient: {
    flex: 1,
  },
  lowerContainer: {
    flex: 1,
    // height: 340,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // backgroundColor: Colors.theme,
  },
  introShort: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.blackText,
    fontFamily: Fonts.bold,
  },
  introLong: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    // color: Colors.white,
    fontFamily: Fonts.bold,
  },
  btnContainer: {
    ...Styles.btnContainer,
    width: '50%',
    marginVertical: 35
  },
});

export default IntroScreen;