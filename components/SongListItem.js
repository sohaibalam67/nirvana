import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
const { width, height } = Dimensions.get("screen");
import colors from "../values/colors";
import fonts from "../values/fonts";
let placeholder = require("../assets/images/placeholder.png");
export default class SongListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageSource =
      this.props.song.cover != null
        ? { uri: this.props.song.cover, cache: "only-if-cached" }
        : placeholder;
    return (
      <TouchableHighlight
        style={StyleSheet.container}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={this.props.onPressItem.bind(this, this.props.song)}
      >
        <View style={styles.innerContent}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.albumArtPlaceholder}>
              <Image
                source={imageSource}
                resizeMode={"cover"}
                style={styles.albumArtImage}
              />
            </View>
            <View style={styles.textContent}>
              <Text
                style={styles.songName}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {this.props.song.title}
              </Text>
              <Text style={styles.artistName}>{this.props.song.author}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width
  },
  innerContent: {
    width: width,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textContent: {
    paddingLeft: 10,
    width: width - 150
  },
  albumArtPlaceholder: {
    height: 50,
    width: 50,
    backgroundColor: colors.OFF_WHITE
  },
  albumArtImage: {
    width: null,
    height: null,
    flex: 1
  },
  songName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 16,
    color: colors.WHITE
  },
  artistName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 12,
    color: "rgba(255,255,255,0.5)"
  },
  duration: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 12,
    color: colors.WHITE,
    paddingTop: 5
  }
});
