import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Slider,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import fonts from '../../values/fonts';
import colors from '../../values/colors';
const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/Feather';
import CustomHeader from '../../components/CustomHeader';
import {storeIsSongPlaying} from '../../store/actions/isSongPlaying';

let placeholder = require('../../assets/images/placeholder.png');

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SliderValue: 0,
      paused: false,
    };
  }

  componentDidMount() {
    global.sound.getCurrentTime((seconds, isPlaying) => {
      val = parseInt(seconds * 1000);
      t.setState({
        SliderValue: val,
      });
    });
    const t = this;
    this.timeout = setInterval(() => {
      if (
        global.sound &&
        global.sound.isLoaded() &&
        this.props.is_song_playing
      ) {
        global.sound.getCurrentTime((seconds, isPlaying) => {
          val = parseInt(seconds * 1000);
          t.setState({
            SliderValue: val,
          });
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  changePlayingState = event => {
    if (this.props.is_song_playing) {
      global.sound.pause();
    } else {
      global.sound.play();
    }
    this.props.storeIsSongPlaying(!this.props.is_song_playing);
  };

  setTime = event => {};
  onEnd = event => {};

  render() {
    let playButton = this.props.is_song_playing ? (
      <Icon name="pause" size={30} color={colors.RED} />
    ) : (
      <Icon name="play" size={30} color={colors.RED} />
    );

    let imageSource =
      this.props.current_song.cover != null
        ? {uri: this.props.current_song.cover, cache: 'only-if-cached'}
        : placeholder;

    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} />
        <View style={styles.playerContent}>
          <View style={styles.albumArtPlaceholder}>
            <Image
              source={imageSource}
              resizeMode={'cover'}
              style={styles.albumArtImage}
            />
          </View>
          <View style={styles.songInfo}>
            <Text style={styles.songName}>{this.props.current_song.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.albumName}>
                {this.props.current_song.album
                  ? this.props.current_song.album
                  : ''}
                ,{' '}
              </Text>
              <Text style={styles.artistName}>
                {this.props.current_song.author
                  ? this.props.current_song.author
                  : ''}
              </Text>
            </View>
          </View>
          <Slider
            step={100}
            minimumValue={0}
            maximumValue={parseInt(this.props.current_song.duration)}
            minimumTrackTintColor={colors.RED}
            maximumTrackTintColor="rgba(255,255,255,0.5)"
            value={this.state.SliderValue}
            thumbTintColor={colors.RED}
            style={{width: '100%'}}
          />
          <View style={styles.duration}>
            <Text style={styles.time}>
              {Math.floor(this.state.SliderValue / 60000)}:
              {parseInt((this.state.SliderValue % 60000) / 1000)}
            </Text>
            <Text style={styles.time}>
              {Math.floor(this.props.current_song.duration / 60000)}:
              {(
                '0' +
                parseInt((this.props.current_song.duration % 60000) / 1000)
              ).slice(-2)}
            </Text>
          </View>

          <View style={styles.controls}>
            <TouchableHighlight style={styles.previous}>
              <Icon name="skip-back" size={25} color={colors.OFF_WHITE} />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.play}
              underlayColor={colors.OFF_WHITE}
              onPress={this.changePlayingState.bind(this)}>
              {playButton}
            </TouchableHighlight>
            <TouchableHighlight style={styles.next}>
              <Icon name="skip-forward" size={25} color={colors.OFF_WHITE} />
            </TouchableHighlight>
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
  },
  playerContent: {
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumArtPlaceholder: {
    height: width - 40,
    width: width - 40,
    backgroundColor: colors.STONE,
    borderRadius: width,
    elevation: 20,
  },
  albumArtImage: {
    borderRadius: width,
    width: null,
    height: null,
    flex: 1,
  },
  songInfo: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  songName: {
    fontFamily: fonts.TITLE,
    fontSize: 22,
    color: colors.WHITE,
  },
  albumName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 16,
    color: colors.OFF_WHITE,
  },
  artistName: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 16,
    color: colors.OFF_WHITE,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width,
    marginTop: 40,
  },
  previous: {
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {
    padding: 30,
    borderRadius: 100,
    backgroundColor: colors.OFF_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
  },
  time: {
    fontFamily: fonts.SUBTITLE,
    fontSize: 14,
    color: colors.OFF_WHITE,
  },
});

const mapStateToProps = state => ({
  current_song: state.current_song.current_song,
  is_song_playing: state.is_song_playing.is_song_playing,
});
const mapDispatchToProps = dispatch => ({
  storeIsSongPlaying: value => dispatch(storeIsSongPlaying(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
