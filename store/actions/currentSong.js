import { CURRENT_SONG } from "./actionTypes";

export const storeCurrentSong = current_song => {
  return {
    type: CURRENT_SONG,
    current_song
  };
};
