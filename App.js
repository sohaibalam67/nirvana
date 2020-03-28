import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import colors from './src/values/colors';
import RootScreen from './src/screens/RootScreen';
import configureStore from './src/store/configureStore';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.JET_BLACK}}>
          <StatusBar
            backgroundColor={colors.JET_BLACK}
            barStyle="light-content"
          />
          <RootScreen />
        </SafeAreaView>
      </Provider>
    );
  }
}
