

import React,{useEffect} from 'react';
import {LogBox, Text,PermissionsAndroid} from 'react-native';
// import store from './src/Store/store';
import {combinedReducers} from './src/Reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import Geolocation from 'react-native-geolocation-service';
import RouterComponent from './src/Navigations/router';
import {Provider} from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
function APP() {
  const store= createStore(combinedReducers, {} , applyMiddleware(ReduxThunk));
  // LogBox.ignoreAllLogs(true);

 
  return (
         <Provider store={store}>
<PaperProvider>
    <RouterComponent/> 
    </PaperProvider>
    </Provider>

  )}


export default APP;
