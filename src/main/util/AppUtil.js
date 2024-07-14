import { Dimensions, Platform, StatusBar } from 'react-native';
import Snackbar from 'react-native-snackbar';



const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})


export const MessageType = {
    ERROR: "error",
    WRAN: "warn",
    INFO: "info",
    SUCCESS: "success"
}

export const showMessage = async (msg, type) => {
    // await new Promise((resolve) => setTimeout(resolve, 200))
    setTimeout(() => {
        Snackbar.show({
            text: msg,
            duration: Snackbar.LENGTH_LONG,
            textColor: 'white',
            backgroundColor: getSnackBarColor(type),
        });
    }, 200);
    
}

const getSnackBarColor = (type) => {
    switch (type) {
        case MessageType.ERROR:
            return 'red';
        case MessageType.WRAN:
            return 'yellow';
        case MessageType.INFO:
            return 'blue';
        case MessageType.SUCCESS:
            return 'green';
        default:
            return null;
    }
}





