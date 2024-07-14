import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Provider, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PaperDropdown from './PaperDropdown';
// import PaperDropdown from 'react-native-paper-dropdown';
import { Colors, Fonts } from '../../res';




const Dropdown = (props) => {
    // const dispatch = useDispatch();
    // const driver = useSelector((state: any) => state.driver)

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        // <Provider >
        <View style={{ ...styles.dropDownContainer, ...props.style }} >
            <PaperDropdown
                theme={{ colors: { background: Colors.textInputBg, } }}
                inputProps={{
                    theme: {
                        colors: { background: props.inputProps?.backgroundColor || Colors.white, placeholder: '#999', },
                        fonts: {
                            regular: { fontFamily: Fonts.medium, fontWeight: 'normal' }
                        },
                        roundness: props?.roundness || 25
                    },
                    style: { height: 48, paddingHorizontal: 0,  },
                    outlineColor: props?.outlineColor || Colors.textInputBg,
                    right: <TextInput.Icon style={{ marginTop: 8, }} icon={({ size, color }) => (
                        <MaterialCommunityIcons name={showDropDown ? "menu-up" : "menu-down"} size={size} color={Colors.gray} />
                    )} />,
                    // ...props.inputProps
                }}
                dropDownItemTextStyle={{ fontFamily: Fonts.medium, color:'gray' }}
                dropDownItemSelectedTextStyle={{ fontFamily: Fonts.bold, color:'gray' }}
                label={props.label}
                placeholder={props?.placeholder}
                mode={props?.mode}
                multiSelect={props.multiSelect}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={props.value}
                setValue={(value) => { props.setValue(value) }}
                list={props.data}
            />
        </View>
        // </Provider>
    );
};


const styles = StyleSheet.create({
    dropDownContainer: {
        // flex: 1,
        // height: 40,
        // backgroundColor:'red'
        // marginVertical: 10,
        // marginHorizontal: 5,
    }
})




export default Dropdown;
// default React.memo(Dropdown);