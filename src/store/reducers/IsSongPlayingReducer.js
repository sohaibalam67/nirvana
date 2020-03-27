import { IS_SONG_PLAYING } from "../actions/actionTypes";

const INITIAL_STATE = {
  is_song_playing: false
};

const IsSongPlayingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_SONG_PLAYING:
      return {
        ...state,
        is_song_playing: action.is_song_playing
      };

    default:
      return state;
  }
};

export default IsSongPlayingReducer;
