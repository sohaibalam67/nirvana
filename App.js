import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import colors from './values/colors';
import RootScreen from './screens/RootScreen';
import configureStore from './store/configureStore';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor={colors.JET_BLACK}
          barStyle="light-content"
        />
        <RootScreen />
      </Provider>
    );
  }
}
