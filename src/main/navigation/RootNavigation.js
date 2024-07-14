import React, { createRef } from 'react';
import { createNavigationContainerRef, StackActions, CommonActions } from '@react-navigation/native';


// export const navigationRef = React.createRef();
export const navigationRef = createNavigationContainerRef();


export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
}

export const reset = (name) => {
    navigationRef.reset({
        index: 0,
        routes: [{ name: name }]
    })
}

