import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import colors from "../values/colors";
import fonts from "../values/fonts";

const CustomHeader = props => {
  return (
    <View style={styles.playerHeader}>
      <StatusBar backgroundColor={colors.JET_BLACK} barStyle="light-content" />
      <TouchableHighlight
        style={styles.backButton}
        underlayColor={"rgba(0,0,0,0.1)"}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={30} color={colors.WHITE} />
      </TouchableHighlight>

      <View>
        <Text style={styles.title}>NOW PLAYING</Text>
      </View>

      <TouchableHighlight
        style={styles.moreButton}
        underlayColor={"rgba(0,0,0,0.1)"}
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Icon name="more-horizontal" size={30} color={colors.WHITE} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  playerHeader: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: colors.JET_BLACK,
    maxHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: fonts.TITLE,
    fontSize: 18,
    color: colors.WHITE
  },
  backButton: {
    padding: 10,
    borderRadius: 100
  },
  moreButton: {
    padding: 10,
    borderRadius: 100
  }
});

export default CustomHeader;
