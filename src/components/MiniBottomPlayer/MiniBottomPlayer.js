import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../values/colors';
import Icon from 'react-native-vector-icons/Feather';
import {storeIsSongPlaying} from '../../store/actions/isSongPlaying';

const {width, height} = Dimensions.get('screen');

class MiniBottomPlayer extends Component {
  changePlayingState = event => {
    if (this.props.is_song_playing) {
      global.sound.pause();
    } else {
      global.sound.play();
    }
    this.props.storeIsSongPlaying(!this.props.is_song_playing);
  };
  render() {
    let playButton = this.props.is_song_playing ? (
      <Icon name="pause" size={25} color={colors.WHITE} />
    ) : (
      <Icon name="play" size={25} color={colors.WHITE} />
    );
    return (
      <View style={styles.playerContainer}>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('Player');
          }}>
          <View style={styles.innerContainer}>
            <View style={styles.songInfo}>
              <Text
                style={styles.songName}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {this.props.current_song.title}
              </Text>
              <Text
                style={styles.artistName}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {this.props.current_song.author}
              </Text>
            </View>
            <View style={styles.buttonSet}>
              {/* <View style={styles.button}>
              <Icon name="skip-back" size={20} color={colors.WHITE} />
            </View> */}
              <TouchableHighlight
                onPress={this.changePlayingState.bind(this)}
                underlayColor={colors.BLACK}>
                <View style={styles.button}>{playButton}</View>
              </TouchableHighlight>
              {/* <View style={styles.button}>
              <Icon name="skip-forward" size={20} color={colors.WHITE} />
            </View> */}
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    width: width,
    minHeight: 60,
    maxHeight: 60,
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.STONE,
  },
  innerContainer: {
    paddingLeft: 20,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songInfo: {
    flexDirection: 'column',
  },
  songName: {
    fontSize: 14,
    color: colors.WHITE,
    width: width - 100,
  },
  artistName: {
    fontSize: 12,
    color: colors.OFF_WHITE,
  },
  buttonSet: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: width,
    position: 'absolute',
    top: 0,
  },
});

const mapStateToProps = state => ({
  current_song: state.current_song.current_song,
  is_song_playing: state.is_song_playing.is_song_playing,
});
const mapDispatchToProps = dispatch => ({
  storeIsSongPlaying: value => dispatch(storeIsSongPlaying(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MiniBottomPlayer);
