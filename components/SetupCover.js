import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import colors from '../values/colors';
import fonts from '../values/fonts';
import Icon from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('window');

export default class SetupCover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Animated.View style={styles.mediumCircle}>
            <View style={styles.smallCircle}>
              <Icon name="package" size={50} color={colors.WHITE} />
            </View>
          </Animated.View>
          <View>
            <Text style={styles.title}>PLEASE WAIT WHILE WE SETUP THE APP</Text>
            <Text style={styles.subtitle}>
              Importing songs into the player...
            </Text>
          </View>
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
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    width: width / 3,
    height: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.65)',
    borderRadius: width,
  },
  mediumCircle: {
    width: width / 2,
    height: width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.35)',
    borderRadius: width,
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
    fontSize: 12,
  },
});
