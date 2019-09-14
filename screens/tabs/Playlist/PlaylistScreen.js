import React, {Component} from 'react';
import colors from '../../../values/colors';
import MiniBottomPlayer from '../../../components/MiniBottomPlayer';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class PlaylistScreen extends Component {
  render() {
    let showMiniPlayer = global.sound ? (
      <MiniBottomPlayer navigation={this.props.navigation} />
    ) : (
      <View />
    );
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.JET_BLACK}
          barStyle="light-content"
        />
        {showMiniPlayer}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.JET_BLACK,
  },
});
