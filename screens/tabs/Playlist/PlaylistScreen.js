import React, {Component} from 'react';
import colors from '../../../values/colors';
import {StyleSheet, View} from 'react-native';
import MiniBottomPlayer from '../../../components/MiniBottomPlayer';

export default class PlaylistScreen extends Component {
  render() {
    let showMiniPlayer = global.sound ? (
      <MiniBottomPlayer navigation={this.props.navigation} />
    ) : (
      <View />
    );
    return <View style={styles.container}>{showMiniPlayer}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.JET_BLACK,
  },
});
