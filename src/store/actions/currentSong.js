import {STORE_CURRENT_SONG} from './actionTypes';

export const storeCurrentSong = current_song => {
  return {
    type: STORE_CURRENT_SONG,
    current_song,
  };
};
