import {STORE_ALL_SONGS} from '../actions/actionTypes';

const INITIAL_STATE = {
  songs: [],
};

const SongsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ALL_SONGS:
      return {
        ...state,
        songs: action.songs,
      };

    default:
      return state;
  }
};

export default SongsReducer;
