import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';



const Styles = {
  ...StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: Colors.white,
    },
    toolbarHeader: {
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      paddingTop: 20,
      paddingHorizontal: 16
    },
    headerRight: {
      position: 'absolute',
      right: 0,
      alignSelf: 'flex-end',
      height: '100%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    pageHeaderTitle: {
      // flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18,
    },
    imgBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    pageHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingRight: 16,
      paddingLeft: 8,
    },
    textInputContainer: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // marginHorizontal: 30,
      paddingHorizontal: 16,
      borderRadius: 25,
      backgroundColor: Colors.textInputBg,
    },
    btnPaper: {
      // flex: 1,
      borderRadius: 4,
      borderWidth: 1,
      // borderStyle: 'dashed',
      borderColor: Colors.primary,
      backgroundColor: Colors.white,
    },
    btnContainer: {
      height: 50,
      // width: '60%',
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 25,
      backgroundColor: Colors.primary,
      // shadowColor: 'rgba(0, 0, 0, 0.1)',
      // shadowColor: 'black',
      // shadowOpacity: 0.8,
      // elevation: 2,
      // shadowRadius: 5,
      // shadowOffset: { width: 1, height: 2 },
    },
    btnStrokeContainer: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors.primary,
      backgroundColor: 'white',
      // shadowColor: 'black',
      // shadowOpacity: 0.8,
      // elevation: 2,
      // shadowRadius: 5,
      // shadowOffset: { width: 1, height: 2 },
    },
    btnBorderLess: {
      alignSelf: 'center',
      paddingHorizontal: 8,
      paddingVertical: 5,
      // backgroundColor:'red'
    },
    btnText: {
      color: 'white',
      fontSize: 18,
      // textTransform: 'uppercase',
      fontFamily: Fonts.bold
    },
    borderLessbtnText: {
      textTransform: 'uppercase',
      fontFamily: Fonts.bold,
      color: Colors.primary,
      fontSize: 14,
    },
    inputLayout: {
      fontSize: 16,
      // fontFamily: Font.openSans
    },
    textInput: {
      flex: 1,
      height: 50,
      color: Colors.blackText,
      fontFamily: Fonts.medium,
      fontSize: 16
    },
    listItemIcon: {
      color: 'gray',
    },
    listItemTitle: {
      fontFamily: Fonts.FONT_SEMI_BOLD,
      fontSize: 14,
    },
    listItemDescription: {
      fontFamily: Fonts.FONT_MEDIUM,
      fontSize: 12,
      color: 'gray'
    },
    listItemShadow: {
      elevation: 2,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
    },
    checkBoxIcon: {
      // color: Color.colorPrimaryDark,
    },
    text: {
      fontSize: 24,
      color: 'white',
      // fontFamily: Fonts.FONT_BOLD
    },
    textHeader: {
      marginTop: 14,
      marginBottom: 8,
      // fontFamily: Font.openSans,
      color: 'gray',
      fontSize: 15,
    },
    sectionHeader: {
      // alignSelf: 'center',
      // marginVertical: 7,
      // paddingHorizontal: 16,
      // paddingVertical: 4,
      // paddingTop: 16,
      // paddingBottom: 4,
      color: Colors.black,
      fontFamily: Fonts.bold,
      fontSize: 16,
    },
    headerContainer: {
      height: 60,
      justifyContent: 'center',
      // backgroundColor: Color.colorPrimaryDark,
    },
    emptyListText: {
      // flex: 1,
      textAlign: 'center',
      fontFamily: Fonts.semi_bold,
      fontSize: 18,
    },
    linearGradient: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    circleBG: {
      height: 45,
      width: 45,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 4
    },
  }),
};

export default Styles;