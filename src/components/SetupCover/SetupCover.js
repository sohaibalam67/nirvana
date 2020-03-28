import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import colors from '../../values/colors';
import fonts from '../../values/fonts';
import Icon from 'react-native-vector-icons/Feather';
import Pulse from './Pulse';
const {width, height} = Dimensions.get('window');

export default class SetupCover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Pulse color={colors.GREY} numPulses={3} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>PLEASE WAIT WHILE WE SETUP THE APP</Text>
          <Text style={styles.subtitle}>
            Importing songs into the player...
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.JET_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.WHITE,
    fontFamily: fonts.TITLE,
    paddingTop: 40,
    fontSize: 14,
  },
  subtitle: {
    color: colors.GREY,
    fontFamily: fonts.SUBTITLE,
    fontSize: 14,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 100,
  },
});
