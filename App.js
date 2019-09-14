import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import RootScreen from './screens/RootScreen';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
