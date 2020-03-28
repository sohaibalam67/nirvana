import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('screen');
import {getSongName} from '../../helpers/utils';
import colors from '../../values/colors';
import fonts from '../../values/fonts';
let placeholder = require('../../assets/images/placeholder.png');
export default class SongListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let imageSource =
      this.props.song.cover != null
        ? {uri: this.props.song.cover, cache: 'only-if-cached'}
        : placeholder;
    let songName;

    if (
      this.props.song.title &&
      typeof this.props.song.title === 'string' &&
      this.props.song.title.trim() !== ''
    ) {
      songName = this.props.song.title;
    } else {
      songName = getSongName(this.props.song.fileName);
    }
    return (
      <TouchableHighlight
        style={StyleSheet.container}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={this.props.onPressItem.bind(this, this.props.song)}>
        <View style={styles.innerContent}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.albumArtPlaceholder}>
              <Image
                source={imageSource}
                resizeMode={'cover'}
                style={styles.albumArtImage}
              />
            </View>
            <View style={styles.textContent}>
              <Text
                style={styles.songName}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {songName}
              </Text>
              <Text style={styles.artistName}>
                {this.props.song.author
                  ? this.props.song.author
                  : 'Unknown Artist'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  innerContent: {
    width: width,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    paddingLeft: 10,
    width: width - 150,
  },
  albumArtPlaceholder: {
    height: 50,
    width: 50,
    backgroundColor: colors.OFF_WHITE,
  },
  albumArtImage: {
    width: null,
    height: null,
    flex: 1,
  },
  songName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 16,
    color: colors.WHITE,
  },
  artistName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
  },
  duration: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 12,
    color: colors.WHITE,
    paddingTop: 5,
  },
});
