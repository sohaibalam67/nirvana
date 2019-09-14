import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import currentSongReducer from "./reducers/CurrentSongReducer";
import isSongPlayingReducer from "./reducers/IsSongPlayingReducer";

const rootReducer = combineReducers({
  current_song: currentSongReducer,
  is_song_playing: isSongPlayingReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;
