import {STORE_ALL_SONGS} from './actionTypes';

export const storeSongs = songs => {
  return {
    type: STORE_ALL_SONGS,
    songs,
  };
};
