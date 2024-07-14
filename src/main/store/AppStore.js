import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'



const appReducer = combineReducers({
    // auth: AuthReducer,
    // user: UserReducer,

})

const rootReducer = (state, action) => {
    // console.log('@@@@@@@@@@@@@@@@@@rootReducer', action);
    if (action.type === 'LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}


const createStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: rootReducer,
        // middleware: [...middlewares],
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        preloadedState: initialState,
    });

    // sagaMiddleware.run(sagas);
    return store;
}
const appStore = createStore()
export default appStore;