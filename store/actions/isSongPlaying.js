import { IS_SONG_PLAYING } from "./actionTypes";

export const storeIsSongPlaying = is_song_playing => {
  return {
    type: IS_SONG_PLAYING,
    is_song_playing
  };
};
