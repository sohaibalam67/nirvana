import {connect} from 'react-redux';
import React, {Component} from 'react';
import Sound from 'react-native-sound';
import colors from '../../../values/colors';
import Permissions from 'react-native-permissions';
import MusicFiles from 'react-native-get-music-files';
import {StyleSheet, View, FlatList} from 'react-native';
import {SongListItem} from '../../../components/SongListItem';
import {MiniBottomPlayer} from '../../../components/MiniBottomPlayer';
import {storeSongs} from '../../../store/actions/songs';
import {storeCurrentSong} from '../../../store/actions/currentSong';
import {storeIsSongPlaying} from '../../../store/actions/isSongPlaying';

class LibraryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storagePermission: '',
    };
  }

  playSong = song => {
    if (this.props.is_song_playing && global.sound != undefined) {
      global.sound.release();
    }
    this.props.storeCurrentSong({
      title: song.title,
      author: song.author,
      album: song.album,
      duration: song.duration,
      cover: song.cover,
      path: song.path,
    });
    this.props.storeIsSongPlaying(true);
    this.sound = new Sound(song.path, null, error => {
      this.sound.play();
    });
    global.sound = this.sound;
  };

  _renderItem = ({item}) => (
    <SongListItem onPressItem={this.playSong} song={item} />
  );

  componentDidMount() {
    Permissions.request('storage').then(response => {
      this.setState({
        storagePermission: response,
      });
    });
    MusicFiles.getAll({
      blured: false, // works only when 'cover' is set to true
      artist: true,
      duration: true, //default : true
      genre: true,
      title: true,
      cover: true,
      minimumSongDuration: 30000,
    })
      .then(songs => {
        this.props.storeSongs(songs);
      })
      .catch(error => {
        alert('Something went wrong');
      });
  }

  render() {
    let showMiniPlayer = global.sound ? (
      <MiniBottomPlayer navigation={this.props.navigation} />
    ) : (
      <View />
    );
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.songs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
          contentContainerStyle={{paddingBottom: 60}}
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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const mapStateToProps = state => ({
  songs: state.songs.songs,
  current_song: state.current_song.current_song,
  is_song_playing: state.is_song_playing.is_song_playing,
});
const mapDispatchToProps = dispatch => ({
  storeSongs: songs => dispatch(storeSongs(songs)),
  storeCurrentSong: song => dispatch(storeCurrentSong(song)),
  storeIsSongPlaying: value => dispatch(storeIsSongPlaying(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LibraryScreen);
