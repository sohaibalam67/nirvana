import {STORE_CURRENT_SONG} from '../actions/actionTypes';

const INITIAL_STATE = {
  current_song: {
    title: null,
    author: null,
    album: null,
    duration: null,
    cover: null,
    fileName: null,
    path: null,
  },
};

const CurrentSongReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CURRENT_SONG:
      var song = {
        title: action.current_song.title,
        author: action.current_song.author,
        album: action.current_song.album,
        duration: action.current_song.duration,
        cover: action.current_song.cover,
        fileName: action.current_song.fileName,
        path: action.current_song.path,
      };
      return {
        ...state,
        current_song: song,
      };

    default:
      return state;
  }
};

export default CurrentSongReducer;
